/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { BillingTypeLineProperties } from './BillingTypeLineProperties';
import { ProjBillingType } from './ProjBillingType';

/**
 * Request builder class for operations supported on the {@link BillingTypeLineProperties} entity.
 */
export class BillingTypeLinePropertiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BillingTypeLineProperties<T>, T> {
  /**
   * Returns a request builder for querying all `BillingTypeLineProperties` entities.
   * @returns A request builder for creating requests to retrieve all `BillingTypeLineProperties` entities.
   */
  getAll(): GetAllRequestBuilder<BillingTypeLineProperties<T>, T> {
    return new GetAllRequestBuilder<BillingTypeLineProperties<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BillingTypeLineProperties` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BillingTypeLineProperties`.
   */
  create(
    entity: BillingTypeLineProperties<T>
  ): CreateRequestBuilder<BillingTypeLineProperties<T>, T> {
    return new CreateRequestBuilder<BillingTypeLineProperties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BillingTypeLineProperties` entity based on its keys.
   * @param dataAreaId Key property. See {@link BillingTypeLineProperties.dataAreaId}.
   * @param billingType Key property. See {@link BillingTypeLineProperties.billingType}.
   * @returns A request builder for creating requests to retrieve one `BillingTypeLineProperties` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    billingType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.ProjBillingType'
    >
  ): GetByKeyRequestBuilder<BillingTypeLineProperties<T>, T> {
    return new GetByKeyRequestBuilder<BillingTypeLineProperties<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        BillingType: billingType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BillingTypeLineProperties`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BillingTypeLineProperties`.
   */
  update(
    entity: BillingTypeLineProperties<T>
  ): UpdateRequestBuilder<BillingTypeLineProperties<T>, T> {
    return new UpdateRequestBuilder<BillingTypeLineProperties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BillingTypeLineProperties`.
   * @param dataAreaId Key property. See {@link BillingTypeLineProperties.dataAreaId}.
   * @param billingType Key property. See {@link BillingTypeLineProperties.billingType}.
   * @returns A request builder for creating requests that delete an entity of type `BillingTypeLineProperties`.
   */
  delete(
    dataAreaId: string,
    billingType: ProjBillingType
  ): DeleteRequestBuilder<BillingTypeLineProperties<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BillingTypeLineProperties`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BillingTypeLineProperties` by taking the entity as a parameter.
   */
  delete(
    entity: BillingTypeLineProperties<T>
  ): DeleteRequestBuilder<BillingTypeLineProperties<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    billingType?: ProjBillingType
  ): DeleteRequestBuilder<BillingTypeLineProperties<T>, T> {
    return new DeleteRequestBuilder<BillingTypeLineProperties<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BillingTypeLineProperties
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BillingType: billingType!
          }
    );
  }
}
