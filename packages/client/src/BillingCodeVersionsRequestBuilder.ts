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
import { BillingCodeVersions } from './BillingCodeVersions';

/**
 * Request builder class for operations supported on the {@link BillingCodeVersions} entity.
 */
export class BillingCodeVersionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BillingCodeVersions<T>, T> {
  /**
   * Returns a request builder for querying all `BillingCodeVersions` entities.
   * @returns A request builder for creating requests to retrieve all `BillingCodeVersions` entities.
   */
  getAll(): GetAllRequestBuilder<BillingCodeVersions<T>, T> {
    return new GetAllRequestBuilder<BillingCodeVersions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BillingCodeVersions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BillingCodeVersions`.
   */
  create(
    entity: BillingCodeVersions<T>
  ): CreateRequestBuilder<BillingCodeVersions<T>, T> {
    return new CreateRequestBuilder<BillingCodeVersions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BillingCodeVersions` entity based on its keys.
   * @param dataAreaId Key property. See {@link BillingCodeVersions.dataAreaId}.
   * @param validTo Key property. See {@link BillingCodeVersions.validTo}.
   * @param validFrom Key property. See {@link BillingCodeVersions.validFrom}.
   * @param billingCode Key property. See {@link BillingCodeVersions.billingCode}.
   * @returns A request builder for creating requests to retrieve one `BillingCodeVersions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    billingCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BillingCodeVersions<T>, T> {
    return new GetByKeyRequestBuilder<BillingCodeVersions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ValidTo: validTo,
        ValidFrom: validFrom,
        BillingCode: billingCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BillingCodeVersions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BillingCodeVersions`.
   */
  update(
    entity: BillingCodeVersions<T>
  ): UpdateRequestBuilder<BillingCodeVersions<T>, T> {
    return new UpdateRequestBuilder<BillingCodeVersions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BillingCodeVersions`.
   * @param dataAreaId Key property. See {@link BillingCodeVersions.dataAreaId}.
   * @param validTo Key property. See {@link BillingCodeVersions.validTo}.
   * @param validFrom Key property. See {@link BillingCodeVersions.validFrom}.
   * @param billingCode Key property. See {@link BillingCodeVersions.billingCode}.
   * @returns A request builder for creating requests that delete an entity of type `BillingCodeVersions`.
   */
  delete(
    dataAreaId: string,
    validTo: Moment,
    validFrom: Moment,
    billingCode: string
  ): DeleteRequestBuilder<BillingCodeVersions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BillingCodeVersions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BillingCodeVersions` by taking the entity as a parameter.
   */
  delete(
    entity: BillingCodeVersions<T>
  ): DeleteRequestBuilder<BillingCodeVersions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    validTo?: Moment,
    validFrom?: Moment,
    billingCode?: string
  ): DeleteRequestBuilder<BillingCodeVersions<T>, T> {
    return new DeleteRequestBuilder<BillingCodeVersions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BillingCodeVersions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ValidTo: validTo!,
            ValidFrom: validFrom!,
            BillingCode: billingCode!
          }
    );
  }
}
