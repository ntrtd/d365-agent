/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { BenefitEmplFutureLifeEvents } from './BenefitEmplFutureLifeEvents';

/**
 * Request builder class for operations supported on the {@link BenefitEmplFutureLifeEvents} entity.
 */
export class BenefitEmplFutureLifeEventsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitEmplFutureLifeEvents<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitEmplFutureLifeEvents` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitEmplFutureLifeEvents` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitEmplFutureLifeEvents<T>, T> {
    return new GetAllRequestBuilder<BenefitEmplFutureLifeEvents<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitEmplFutureLifeEvents` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitEmplFutureLifeEvents`.
   */
  create(
    entity: BenefitEmplFutureLifeEvents<T>
  ): CreateRequestBuilder<BenefitEmplFutureLifeEvents<T>, T> {
    return new CreateRequestBuilder<BenefitEmplFutureLifeEvents<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitEmplFutureLifeEvents` entity based on its keys.
   * @param personnelNumber Key property. See {@link BenefitEmplFutureLifeEvents.personnelNumber}.
   * @param lifeEventDate Key property. See {@link BenefitEmplFutureLifeEvents.lifeEventDate}.
   * @returns A request builder for creating requests to retrieve one `BenefitEmplFutureLifeEvents` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    lifeEventDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<BenefitEmplFutureLifeEvents<T>, T> {
    return new GetByKeyRequestBuilder<BenefitEmplFutureLifeEvents<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        LifeEventDate: lifeEventDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitEmplFutureLifeEvents`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitEmplFutureLifeEvents`.
   */
  update(
    entity: BenefitEmplFutureLifeEvents<T>
  ): UpdateRequestBuilder<BenefitEmplFutureLifeEvents<T>, T> {
    return new UpdateRequestBuilder<BenefitEmplFutureLifeEvents<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitEmplFutureLifeEvents`.
   * @param personnelNumber Key property. See {@link BenefitEmplFutureLifeEvents.personnelNumber}.
   * @param lifeEventDate Key property. See {@link BenefitEmplFutureLifeEvents.lifeEventDate}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitEmplFutureLifeEvents`.
   */
  delete(
    personnelNumber: string,
    lifeEventDate: Moment
  ): DeleteRequestBuilder<BenefitEmplFutureLifeEvents<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitEmplFutureLifeEvents`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitEmplFutureLifeEvents` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitEmplFutureLifeEvents<T>
  ): DeleteRequestBuilder<BenefitEmplFutureLifeEvents<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    lifeEventDate?: Moment
  ): DeleteRequestBuilder<BenefitEmplFutureLifeEvents<T>, T> {
    return new DeleteRequestBuilder<BenefitEmplFutureLifeEvents<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof BenefitEmplFutureLifeEvents
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            LifeEventDate: lifeEventDate!
          }
    );
  }
}
