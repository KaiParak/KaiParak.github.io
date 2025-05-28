import styles from './Resume.module.css'
import Image from 'next/image'

const Resume = () => {
	return (
		<div className={styles.cvContainer}>
			<section className={styles.header}>
				<Image
					src="https://sun9-36.userapi.com/impg/bUAfv89gw1YuJZ7c79xUeqTEMqj6Dfeo_23IvQ/dYRRfeVtqtY.jpg?size=1440x2160&quality=95&sign=0c0a4baac8fee2e67456cf6c3657aa7c&type=album"
					alt=""
					width={150}
					height={150}
					className={styles.photo}
				/>
				<div className={styles.headerInfo}>
					<h1>{'Чузаев Алексей'}</h1>
					<p>{'Мужчина, 20 лет'}</p>
					<p>
						{'+7(917) 0000000'}<span>{' — предпочитаемый способ связи'}</span>
					</p>
					<a href="mailto:chuzaeva@mail.ru">{'chuzaeva@mail.ru'}</a>
					<p>{'Проживает: Йошкар-Ола'}</p>
					<p>{'Гражданство: Россия, есть разрешение на работу: Россия'}</p>
					<p>{'Готов к переезду, не готов к командировкам'}</p>
				</div>
			</section>

			<section className={styles.section}>
				<h2>{'Желаемая должность и зарплата'}</h2>
				<p>{'Бэкенд разработчик — 100 000₽'}</p>
				<p>{'Специализации:'}</p>
				<ul>
					<li>{'Программист, разработчик'}</li>
					<li>{'Занятость: частичная занятость'}</li>
					<li>{'График работы: гибкий график, удаленная работа'}</li>
					<li>{'Желательное время в пути до работы: не более часа'}</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>{'Опыт работы — 1 год 1 месяц'}</h2>
				<p>{'Сентябрь 2023 — настоящее время'}</p>
				<div className={styles.experience}>
					<h3>{'Moneta'}</h3>
					<p>{'Йошкар - Ола'}</p>
					<p>{'Информационные технологии, системная интеграция, интернет'}</p>
					<p>{'• Разработка программного обеспечения'}</p>
					<h4>{'Программист'}</h4>
					<p>{'Разработка архитектуры, написание frontend/backend части приложения. Применял MySQL, PHP ' +
						'(Symfony, Doctrine), TypeScript, Redux, React, Redux Toolkit и RTK Query.'}</p>
				</div>
			</section>

			<section className={styles.section}>
				<h2>{'Образование'}</h2>
				<p>{'Неоконченное высшее — 2026'}</p>
				<p>{'Поволжский государственный технологический университет, Йошкар-Ола'}</p>
				<p>{'Факультет информатики и вычислительной техники, Программная инженерия'}</p>
			</section>

			<section className={styles.section}>
				<h2>{'Навыки'}</h2>
				<p>{'Русский — Родной'}</p>
				<ul>
					<li>{'MySQL'}</li>
					<li>{'PHP'}</li>
					<li>{'Git'}</li>
					<li>{'SQL'}</li>
					<li>{'Symfony'}</li>
					<li>{'Docker'}</li>
					<li>{'REST API'}</li>
					<li>{'TypeScript'}</li>
					<li>{'React'}</li>
					<li>{'Redux'}</li>
					<li>{'Английский язык'}</li>
					<li>{'Работа в команде'}</li>
					<li>{'Тайм - менеджмент'}</li>
					<li>{'Постановка целей по SMART'}</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>{'Дополнительная информация'}</h2>
				<p>{'Легко нахожу общий язык с коллегами. Ставлю конкретные цели и всегда стараюсь уложиться в ' +
					'установленный строк. В сложных ситуациях сохраняю терпение и открытость.'}</p>
				<p>{'Прошёл курс Web разработки, научился создавать серверы на Go и верстать страницы (HTML, CSS, JS). ' +
					'Также прошёл курс frontend разработки, изучив TypeScript, React и Redux.'}</p>
			</section>

			<section>
				<h4>{'Резюме обновлено 27 мая 2025, в 19:57'}</h4>
			</section>
		</div>
	)
}

export {
	Resume,
}
