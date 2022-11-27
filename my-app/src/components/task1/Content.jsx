import React, { Component } from "react";
import click from '../../assets/image/click.png';

export default class Content extends Component {
  /*const first=document.getElementById('first');
    const second=document.querySelector('#second');
    let numOfClicks = 0;*/

  constructor(props) {
    super(props);
    this.state = {
      activeRow: {
        firstElement: false,
        secondElement: false,
      },
    };
    this.firstElement = React.createRef();
    this.secondElement = React.createRef();
  }

  // numOfClicks = 0;
  toggleElement(id, { activeColor, disableColor }) {
    const flag = !this.state.activeRow[id];
    this[id].current.id = flag ? activeColor : disableColor 

    this.setState((prevState) => ({
      activeRow: {
        ...prevState.activeRow,
        [id]: flag,
      },
    }));
  }

  render() {
    return (
      <div>
        <p
          id="first"
          ref={this.firstElement}
          onClick={(e) =>
            this.toggleElement("firstElement", {
              activeColor: "oneColor",
              disableColor: "twoColor",
            })
          }
        >
          <span>Хоббі:</span>
          <img
            src={click}
            alt=""
            width="20px"
            height="20px"
          />
        </p>
        <ul>
          <li
            id="second"
            ref={this.secondElement}
            onClick={(e) =>
                this.toggleElement("secondElement", {
                  activeColor: "threeColor",
                  disableColor: "twoColor",
                })
              }
          >
            Гра на музичних інструментах
            <img
              src={click}
              alt=""
              width="20px"
              height="20px"
            />
          </li>
          <li>Біг</li>
          <li>Читання книг</li>
        </ul>
        <p><span>Улюблені книги:</span></p>
        <ol>
          <li>"Гордість і упередження" Джейн Остін</li>
          <li>"Великий Гетсбі" Скотт Фіцджеральд</li>
          <li>"Той, що біжить лабіринтом" Джеймс Дешнер</li>
        </ol>
        <p>
          <span>Улюблене місце:</span> Феодосія
        </p>
        <p className="text">
          <i>Феодосія</i> – курортне місто на березі Чорного моря у
          південно-східній частині Криму. У Феодосії багате історичне минуле –
          курорт має велику екскурсійну програму. Обов'язкові для відвідування
          архітектурні символи міста – Фортеця Кафа і Вежа часів правління
          генуезців, а музей стародавності Феодосії вважається одним із
          найстаріших у Європі. Місто нерозривно пов'язане з цілою плеядою
          відомих представників культури та мистецтва – Айвазовським, Гріном,
          Цвєтаєвою, Волошиним, Мухіною.
        </p>
      </div>
    );
  }
}
