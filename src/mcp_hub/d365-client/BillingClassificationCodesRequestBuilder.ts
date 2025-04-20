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
import { BillingClassificationCodes } from './BillingClassificationCodes';

/**
 * Request builder class for operations supported on the {@link BillingClassificationCodes} entity.
 */
export class BillingClassificationCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BillingClassificationCodes<T>, T> {
  /**
   * Returns a request builder for querying all `BillingClassificationCodes` entities.
   * @returns A request builder for creating requests to retrieve all `BillingClassificationCodes` entities.
   */
  getAll(): GetAllRequestBuilder<BillingClassificationCodes<T>, T> {
    return new GetAllRequestBuilder<BillingClassificationCodes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BillingClassificationCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BillingClassificationCodes`.
   */
  create(
    entity: BillingClassificationCodes<T>
  ): CreateRequestBuilder<BillingClassificationCodes<T>, T> {
    return new CreateRequestBuilder<BillingClassificationCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BillingClassificationCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link BillingClassificationCodes.dataAreaId}.
   * @param billingCode Key property. See {@link BillingClassificationCodes.billingCode}.
   * @returns A request builder for creating requests to retrieve one `BillingClassificationCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    billingCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BillingClassificationCodes<T>, T> {
    return new GetByKeyRequestBuilder<BillingClassificationCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        BillingCode: billingCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BillingClassificationCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BillingClassificationCodes`.
   */
  update(
    entity: BillingClassificationCodes<T>
  ): UpdateRequestBuilder<BillingClassificationCodes<T>, T> {
    return new UpdateRequestBuilder<BillingClassificationCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BillingClassificationCodes`.
   * @param dataAreaId Key property. See {@link BillingClassificationCodes.dataAreaId}.
   * @param billingCode Key property. See {@link BillingClassificationCodes.billingCode}.
   * @returns A request builder for creating requests that delete an entity of type `BillingClassificationCodes`.
   */
  delete(
    dataAreaId: string,
    billingCode: string
  ): DeleteRequestBuilder<BillingClassificationCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BillingClassificationCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BillingClassificationCodes` by taking the entity as a parameter.
   */
  delete(
    entity: BillingClassificationCodes<T>
  ): DeleteRequestBuilder<BillingClassificationCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    billingCode?: string
  ): DeleteRequestBuilder<BillingClassificationCodes<T>, T> {
    return new DeleteRequestBuilder<BillingClassificationCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BillingClassificationCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BillingCode: billingCode!
          }
    );
  }
}
