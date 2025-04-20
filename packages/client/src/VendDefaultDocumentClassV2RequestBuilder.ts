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
import { VendDefaultDocumentClassV2 } from './VendDefaultDocumentClassV2';

/**
 * Request builder class for operations supported on the {@link VendDefaultDocumentClassV2} entity.
 */
export class VendDefaultDocumentClassV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendDefaultDocumentClassV2<T>, T> {
  /**
   * Returns a request builder for querying all `VendDefaultDocumentClassV2` entities.
   * @returns A request builder for creating requests to retrieve all `VendDefaultDocumentClassV2` entities.
   */
  getAll(): GetAllRequestBuilder<VendDefaultDocumentClassV2<T>, T> {
    return new GetAllRequestBuilder<VendDefaultDocumentClassV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendDefaultDocumentClassV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendDefaultDocumentClassV2`.
   */
  create(
    entity: VendDefaultDocumentClassV2<T>
  ): CreateRequestBuilder<VendDefaultDocumentClassV2<T>, T> {
    return new CreateRequestBuilder<VendDefaultDocumentClassV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendDefaultDocumentClassV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendDefaultDocumentClassV2.dataAreaId}.
   * @param accountTypeGroupId Key property. See {@link VendDefaultDocumentClassV2.accountTypeGroupId}.
   * @returns A request builder for creating requests to retrieve one `VendDefaultDocumentClassV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accountTypeGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendDefaultDocumentClassV2<T>, T> {
    return new GetByKeyRequestBuilder<VendDefaultDocumentClassV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AccountTypeGroupId: accountTypeGroupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendDefaultDocumentClassV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendDefaultDocumentClassV2`.
   */
  update(
    entity: VendDefaultDocumentClassV2<T>
  ): UpdateRequestBuilder<VendDefaultDocumentClassV2<T>, T> {
    return new UpdateRequestBuilder<VendDefaultDocumentClassV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendDefaultDocumentClassV2`.
   * @param dataAreaId Key property. See {@link VendDefaultDocumentClassV2.dataAreaId}.
   * @param accountTypeGroupId Key property. See {@link VendDefaultDocumentClassV2.accountTypeGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `VendDefaultDocumentClassV2`.
   */
  delete(
    dataAreaId: string,
    accountTypeGroupId: string
  ): DeleteRequestBuilder<VendDefaultDocumentClassV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendDefaultDocumentClassV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendDefaultDocumentClassV2` by taking the entity as a parameter.
   */
  delete(
    entity: VendDefaultDocumentClassV2<T>
  ): DeleteRequestBuilder<VendDefaultDocumentClassV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    accountTypeGroupId?: string
  ): DeleteRequestBuilder<VendDefaultDocumentClassV2<T>, T> {
    return new DeleteRequestBuilder<VendDefaultDocumentClassV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendDefaultDocumentClassV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AccountTypeGroupId: accountTypeGroupId!
          }
    );
  }
}
