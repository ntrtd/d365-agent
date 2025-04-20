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
import { LtmVendDefaultDocumentClasses } from './LtmVendDefaultDocumentClasses';

/**
 * Request builder class for operations supported on the {@link LtmVendDefaultDocumentClasses} entity.
 */
export class LtmVendDefaultDocumentClassesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmVendDefaultDocumentClasses<T>, T> {
  /**
   * Returns a request builder for querying all `LtmVendDefaultDocumentClasses` entities.
   * @returns A request builder for creating requests to retrieve all `LtmVendDefaultDocumentClasses` entities.
   */
  getAll(): GetAllRequestBuilder<LtmVendDefaultDocumentClasses<T>, T> {
    return new GetAllRequestBuilder<LtmVendDefaultDocumentClasses<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LtmVendDefaultDocumentClasses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmVendDefaultDocumentClasses`.
   */
  create(
    entity: LtmVendDefaultDocumentClasses<T>
  ): CreateRequestBuilder<LtmVendDefaultDocumentClasses<T>, T> {
    return new CreateRequestBuilder<LtmVendDefaultDocumentClasses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmVendDefaultDocumentClasses` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmVendDefaultDocumentClasses.dataAreaId}.
   * @param accountTypeGroupId Key property. See {@link LtmVendDefaultDocumentClasses.accountTypeGroupId}.
   * @returns A request builder for creating requests to retrieve one `LtmVendDefaultDocumentClasses` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accountTypeGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmVendDefaultDocumentClasses<T>, T> {
    return new GetByKeyRequestBuilder<LtmVendDefaultDocumentClasses<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AccountTypeGroupId: accountTypeGroupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LtmVendDefaultDocumentClasses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmVendDefaultDocumentClasses`.
   */
  update(
    entity: LtmVendDefaultDocumentClasses<T>
  ): UpdateRequestBuilder<LtmVendDefaultDocumentClasses<T>, T> {
    return new UpdateRequestBuilder<LtmVendDefaultDocumentClasses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmVendDefaultDocumentClasses`.
   * @param dataAreaId Key property. See {@link LtmVendDefaultDocumentClasses.dataAreaId}.
   * @param accountTypeGroupId Key property. See {@link LtmVendDefaultDocumentClasses.accountTypeGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmVendDefaultDocumentClasses`.
   */
  delete(
    dataAreaId: string,
    accountTypeGroupId: string
  ): DeleteRequestBuilder<LtmVendDefaultDocumentClasses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmVendDefaultDocumentClasses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmVendDefaultDocumentClasses` by taking the entity as a parameter.
   */
  delete(
    entity: LtmVendDefaultDocumentClasses<T>
  ): DeleteRequestBuilder<LtmVendDefaultDocumentClasses<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    accountTypeGroupId?: string
  ): DeleteRequestBuilder<LtmVendDefaultDocumentClasses<T>, T> {
    return new DeleteRequestBuilder<LtmVendDefaultDocumentClasses<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmVendDefaultDocumentClasses
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AccountTypeGroupId: accountTypeGroupId!
          }
    );
  }
}
