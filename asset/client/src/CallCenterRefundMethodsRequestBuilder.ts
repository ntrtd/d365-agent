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
import { CallCenterRefundMethods } from './CallCenterRefundMethods';

/**
 * Request builder class for operations supported on the {@link CallCenterRefundMethods} entity.
 */
export class CallCenterRefundMethodsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CallCenterRefundMethods<T>, T> {
  /**
   * Returns a request builder for querying all `CallCenterRefundMethods` entities.
   * @returns A request builder for creating requests to retrieve all `CallCenterRefundMethods` entities.
   */
  getAll(): GetAllRequestBuilder<CallCenterRefundMethods<T>, T> {
    return new GetAllRequestBuilder<CallCenterRefundMethods<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CallCenterRefundMethods` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CallCenterRefundMethods`.
   */
  create(
    entity: CallCenterRefundMethods<T>
  ): CreateRequestBuilder<CallCenterRefundMethods<T>, T> {
    return new CreateRequestBuilder<CallCenterRefundMethods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CallCenterRefundMethods` entity based on its keys.
   * @param dataAreaId Key property. See {@link CallCenterRefundMethods.dataAreaId}.
   * @param currencyCode Key property. See {@link CallCenterRefundMethods.currencyCode}.
   * @returns A request builder for creating requests to retrieve one `CallCenterRefundMethods` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    currencyCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CallCenterRefundMethods<T>, T> {
    return new GetByKeyRequestBuilder<CallCenterRefundMethods<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CurrencyCode: currencyCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CallCenterRefundMethods`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CallCenterRefundMethods`.
   */
  update(
    entity: CallCenterRefundMethods<T>
  ): UpdateRequestBuilder<CallCenterRefundMethods<T>, T> {
    return new UpdateRequestBuilder<CallCenterRefundMethods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CallCenterRefundMethods`.
   * @param dataAreaId Key property. See {@link CallCenterRefundMethods.dataAreaId}.
   * @param currencyCode Key property. See {@link CallCenterRefundMethods.currencyCode}.
   * @returns A request builder for creating requests that delete an entity of type `CallCenterRefundMethods`.
   */
  delete(
    dataAreaId: string,
    currencyCode: string
  ): DeleteRequestBuilder<CallCenterRefundMethods<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CallCenterRefundMethods`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CallCenterRefundMethods` by taking the entity as a parameter.
   */
  delete(
    entity: CallCenterRefundMethods<T>
  ): DeleteRequestBuilder<CallCenterRefundMethods<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    currencyCode?: string
  ): DeleteRequestBuilder<CallCenterRefundMethods<T>, T> {
    return new DeleteRequestBuilder<CallCenterRefundMethods<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CallCenterRefundMethods
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CurrencyCode: currencyCode!
          }
    );
  }
}
