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
import { BillingCodeRates } from './BillingCodeRates';

/**
 * Request builder class for operations supported on the {@link BillingCodeRates} entity.
 */
export class BillingCodeRatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BillingCodeRates<T>, T> {
  /**
   * Returns a request builder for querying all `BillingCodeRates` entities.
   * @returns A request builder for creating requests to retrieve all `BillingCodeRates` entities.
   */
  getAll(): GetAllRequestBuilder<BillingCodeRates<T>, T> {
    return new GetAllRequestBuilder<BillingCodeRates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BillingCodeRates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BillingCodeRates`.
   */
  create(
    entity: BillingCodeRates<T>
  ): CreateRequestBuilder<BillingCodeRates<T>, T> {
    return new CreateRequestBuilder<BillingCodeRates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BillingCodeRates` entity based on its keys.
   * @param dataAreaId Key property. See {@link BillingCodeRates.dataAreaId}.
   * @param currency Key property. See {@link BillingCodeRates.currency}.
   * @param validTo Key property. See {@link BillingCodeRates.validTo}.
   * @param validFrom Key property. See {@link BillingCodeRates.validFrom}.
   * @param billingCode Key property. See {@link BillingCodeRates.billingCode}.
   * @returns A request builder for creating requests to retrieve one `BillingCodeRates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    currency: DeserializedType<T, 'Edm.String'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    billingCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BillingCodeRates<T>, T> {
    return new GetByKeyRequestBuilder<BillingCodeRates<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Currency: currency,
      ValidTo: validTo,
      ValidFrom: validFrom,
      BillingCode: billingCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BillingCodeRates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BillingCodeRates`.
   */
  update(
    entity: BillingCodeRates<T>
  ): UpdateRequestBuilder<BillingCodeRates<T>, T> {
    return new UpdateRequestBuilder<BillingCodeRates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BillingCodeRates`.
   * @param dataAreaId Key property. See {@link BillingCodeRates.dataAreaId}.
   * @param currency Key property. See {@link BillingCodeRates.currency}.
   * @param validTo Key property. See {@link BillingCodeRates.validTo}.
   * @param validFrom Key property. See {@link BillingCodeRates.validFrom}.
   * @param billingCode Key property. See {@link BillingCodeRates.billingCode}.
   * @returns A request builder for creating requests that delete an entity of type `BillingCodeRates`.
   */
  delete(
    dataAreaId: string,
    currency: string,
    validTo: Moment,
    validFrom: Moment,
    billingCode: string
  ): DeleteRequestBuilder<BillingCodeRates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BillingCodeRates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BillingCodeRates` by taking the entity as a parameter.
   */
  delete(
    entity: BillingCodeRates<T>
  ): DeleteRequestBuilder<BillingCodeRates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    currency?: string,
    validTo?: Moment,
    validFrom?: Moment,
    billingCode?: string
  ): DeleteRequestBuilder<BillingCodeRates<T>, T> {
    return new DeleteRequestBuilder<BillingCodeRates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BillingCodeRates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Currency: currency!,
            ValidTo: validTo!,
            ValidFrom: validFrom!,
            BillingCode: billingCode!
          }
    );
  }
}
