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
import { BenefitsRates } from './BenefitsRates';

/**
 * Request builder class for operations supported on the {@link BenefitsRates} entity.
 */
export class BenefitsRatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsRates<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsRates` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsRates` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsRates<T>, T> {
    return new GetAllRequestBuilder<BenefitsRates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BenefitsRates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsRates`.
   */
  create(entity: BenefitsRates<T>): CreateRequestBuilder<BenefitsRates<T>, T> {
    return new CreateRequestBuilder<BenefitsRates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsRates` entity based on its keys.
   * @param rateId Key property. See {@link BenefitsRates.rateId}.
   * @param validTo Key property. See {@link BenefitsRates.validTo}.
   * @param validFrom Key property. See {@link BenefitsRates.validFrom}.
   * @returns A request builder for creating requests to retrieve one `BenefitsRates` entity based on its keys.
   */
  getByKey(
    rateId: DeserializedType<T, 'Edm.String'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<BenefitsRates<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsRates<T>, T>(this.entityApi, {
      RateId: rateId,
      ValidTo: validTo,
      ValidFrom: validFrom
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsRates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsRates`.
   */
  update(entity: BenefitsRates<T>): UpdateRequestBuilder<BenefitsRates<T>, T> {
    return new UpdateRequestBuilder<BenefitsRates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsRates`.
   * @param rateId Key property. See {@link BenefitsRates.rateId}.
   * @param validTo Key property. See {@link BenefitsRates.validTo}.
   * @param validFrom Key property. See {@link BenefitsRates.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsRates`.
   */
  delete(
    rateId: string,
    validTo: Moment,
    validFrom: Moment
  ): DeleteRequestBuilder<BenefitsRates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsRates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsRates` by taking the entity as a parameter.
   */
  delete(entity: BenefitsRates<T>): DeleteRequestBuilder<BenefitsRates<T>, T>;
  delete(
    rateIdOrEntity: any,
    validTo?: Moment,
    validFrom?: Moment
  ): DeleteRequestBuilder<BenefitsRates<T>, T> {
    return new DeleteRequestBuilder<BenefitsRates<T>, T>(
      this.entityApi,
      rateIdOrEntity instanceof BenefitsRates
        ? rateIdOrEntity
        : {
            RateId: rateIdOrEntity!,
            ValidTo: validTo!,
            ValidFrom: validFrom!
          }
    );
  }
}
