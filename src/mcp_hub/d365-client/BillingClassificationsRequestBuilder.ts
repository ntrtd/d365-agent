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
import { BillingClassifications } from './BillingClassifications';

/**
 * Request builder class for operations supported on the {@link BillingClassifications} entity.
 */
export class BillingClassificationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BillingClassifications<T>, T> {
  /**
   * Returns a request builder for querying all `BillingClassifications` entities.
   * @returns A request builder for creating requests to retrieve all `BillingClassifications` entities.
   */
  getAll(): GetAllRequestBuilder<BillingClassifications<T>, T> {
    return new GetAllRequestBuilder<BillingClassifications<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BillingClassifications` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BillingClassifications`.
   */
  create(
    entity: BillingClassifications<T>
  ): CreateRequestBuilder<BillingClassifications<T>, T> {
    return new CreateRequestBuilder<BillingClassifications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BillingClassifications` entity based on its keys.
   * @param dataAreaId Key property. See {@link BillingClassifications.dataAreaId}.
   * @param billingClassification Key property. See {@link BillingClassifications.billingClassification}.
   * @returns A request builder for creating requests to retrieve one `BillingClassifications` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    billingClassification: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BillingClassifications<T>, T> {
    return new GetByKeyRequestBuilder<BillingClassifications<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        BillingClassification: billingClassification
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BillingClassifications`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BillingClassifications`.
   */
  update(
    entity: BillingClassifications<T>
  ): UpdateRequestBuilder<BillingClassifications<T>, T> {
    return new UpdateRequestBuilder<BillingClassifications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BillingClassifications`.
   * @param dataAreaId Key property. See {@link BillingClassifications.dataAreaId}.
   * @param billingClassification Key property. See {@link BillingClassifications.billingClassification}.
   * @returns A request builder for creating requests that delete an entity of type `BillingClassifications`.
   */
  delete(
    dataAreaId: string,
    billingClassification: string
  ): DeleteRequestBuilder<BillingClassifications<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BillingClassifications`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BillingClassifications` by taking the entity as a parameter.
   */
  delete(
    entity: BillingClassifications<T>
  ): DeleteRequestBuilder<BillingClassifications<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    billingClassification?: string
  ): DeleteRequestBuilder<BillingClassifications<T>, T> {
    return new DeleteRequestBuilder<BillingClassifications<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BillingClassifications
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BillingClassification: billingClassification!
          }
    );
  }
}
