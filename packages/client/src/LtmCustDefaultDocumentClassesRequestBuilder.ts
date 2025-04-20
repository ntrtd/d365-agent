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
import { LtmCustDefaultDocumentClasses } from './LtmCustDefaultDocumentClasses';

/**
 * Request builder class for operations supported on the {@link LtmCustDefaultDocumentClasses} entity.
 */
export class LtmCustDefaultDocumentClassesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmCustDefaultDocumentClasses<T>, T> {
  /**
   * Returns a request builder for querying all `LtmCustDefaultDocumentClasses` entities.
   * @returns A request builder for creating requests to retrieve all `LtmCustDefaultDocumentClasses` entities.
   */
  getAll(): GetAllRequestBuilder<LtmCustDefaultDocumentClasses<T>, T> {
    return new GetAllRequestBuilder<LtmCustDefaultDocumentClasses<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LtmCustDefaultDocumentClasses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmCustDefaultDocumentClasses`.
   */
  create(
    entity: LtmCustDefaultDocumentClasses<T>
  ): CreateRequestBuilder<LtmCustDefaultDocumentClasses<T>, T> {
    return new CreateRequestBuilder<LtmCustDefaultDocumentClasses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmCustDefaultDocumentClasses` entity based on its keys.
   * @param accountTypeGroupId Key property. See {@link LtmCustDefaultDocumentClasses.accountTypeGroupId}.
   * @returns A request builder for creating requests to retrieve one `LtmCustDefaultDocumentClasses` entity based on its keys.
   */
  getByKey(
    accountTypeGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmCustDefaultDocumentClasses<T>, T> {
    return new GetByKeyRequestBuilder<LtmCustDefaultDocumentClasses<T>, T>(
      this.entityApi,
      { AccountTypeGroupId: accountTypeGroupId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LtmCustDefaultDocumentClasses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmCustDefaultDocumentClasses`.
   */
  update(
    entity: LtmCustDefaultDocumentClasses<T>
  ): UpdateRequestBuilder<LtmCustDefaultDocumentClasses<T>, T> {
    return new UpdateRequestBuilder<LtmCustDefaultDocumentClasses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmCustDefaultDocumentClasses`.
   * @param accountTypeGroupId Key property. See {@link LtmCustDefaultDocumentClasses.accountTypeGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmCustDefaultDocumentClasses`.
   */
  delete(
    accountTypeGroupId: string
  ): DeleteRequestBuilder<LtmCustDefaultDocumentClasses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmCustDefaultDocumentClasses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmCustDefaultDocumentClasses` by taking the entity as a parameter.
   */
  delete(
    entity: LtmCustDefaultDocumentClasses<T>
  ): DeleteRequestBuilder<LtmCustDefaultDocumentClasses<T>, T>;
  delete(
    accountTypeGroupIdOrEntity: any
  ): DeleteRequestBuilder<LtmCustDefaultDocumentClasses<T>, T> {
    return new DeleteRequestBuilder<LtmCustDefaultDocumentClasses<T>, T>(
      this.entityApi,
      accountTypeGroupIdOrEntity instanceof LtmCustDefaultDocumentClasses
        ? accountTypeGroupIdOrEntity
        : { AccountTypeGroupId: accountTypeGroupIdOrEntity! }
    );
  }
}
