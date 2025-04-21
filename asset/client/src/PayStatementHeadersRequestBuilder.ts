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
import { PayStatementHeaders } from './PayStatementHeaders';

/**
 * Request builder class for operations supported on the {@link PayStatementHeaders} entity.
 */
export class PayStatementHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayStatementHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `PayStatementHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `PayStatementHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<PayStatementHeaders<T>, T> {
    return new GetAllRequestBuilder<PayStatementHeaders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PayStatementHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayStatementHeaders`.
   */
  create(
    entity: PayStatementHeaders<T>
  ): CreateRequestBuilder<PayStatementHeaders<T>, T> {
    return new CreateRequestBuilder<PayStatementHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayStatementHeaders` entity based on its keys.
   * @param payStatementNumber Key property. See {@link PayStatementHeaders.payStatementNumber}.
   * @returns A request builder for creating requests to retrieve one `PayStatementHeaders` entity based on its keys.
   */
  getByKey(
    payStatementNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayStatementHeaders<T>, T> {
    return new GetByKeyRequestBuilder<PayStatementHeaders<T>, T>(
      this.entityApi,
      { PayStatementNumber: payStatementNumber }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayStatementHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayStatementHeaders`.
   */
  update(
    entity: PayStatementHeaders<T>
  ): UpdateRequestBuilder<PayStatementHeaders<T>, T> {
    return new UpdateRequestBuilder<PayStatementHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayStatementHeaders`.
   * @param payStatementNumber Key property. See {@link PayStatementHeaders.payStatementNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PayStatementHeaders`.
   */
  delete(
    payStatementNumber: string
  ): DeleteRequestBuilder<PayStatementHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayStatementHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayStatementHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: PayStatementHeaders<T>
  ): DeleteRequestBuilder<PayStatementHeaders<T>, T>;
  delete(
    payStatementNumberOrEntity: any
  ): DeleteRequestBuilder<PayStatementHeaders<T>, T> {
    return new DeleteRequestBuilder<PayStatementHeaders<T>, T>(
      this.entityApi,
      payStatementNumberOrEntity instanceof PayStatementHeaders
        ? payStatementNumberOrEntity
        : { PayStatementNumber: payStatementNumberOrEntity! }
    );
  }
}
