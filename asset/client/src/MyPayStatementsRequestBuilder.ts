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
import { MyPayStatements } from './MyPayStatements';

/**
 * Request builder class for operations supported on the {@link MyPayStatements} entity.
 */
export class MyPayStatementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MyPayStatements<T>, T> {
  /**
   * Returns a request builder for querying all `MyPayStatements` entities.
   * @returns A request builder for creating requests to retrieve all `MyPayStatements` entities.
   */
  getAll(): GetAllRequestBuilder<MyPayStatements<T>, T> {
    return new GetAllRequestBuilder<MyPayStatements<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MyPayStatements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MyPayStatements`.
   */
  create(
    entity: MyPayStatements<T>
  ): CreateRequestBuilder<MyPayStatements<T>, T> {
    return new CreateRequestBuilder<MyPayStatements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MyPayStatements` entity based on its keys.
   * @param dataAreaId Key property. See {@link MyPayStatements.dataAreaId}.
   * @param payStatementNumber Key property. See {@link MyPayStatements.payStatementNumber}.
   * @returns A request builder for creating requests to retrieve one `MyPayStatements` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    payStatementNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MyPayStatements<T>, T> {
    return new GetByKeyRequestBuilder<MyPayStatements<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      PayStatementNumber: payStatementNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MyPayStatements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MyPayStatements`.
   */
  update(
    entity: MyPayStatements<T>
  ): UpdateRequestBuilder<MyPayStatements<T>, T> {
    return new UpdateRequestBuilder<MyPayStatements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MyPayStatements`.
   * @param dataAreaId Key property. See {@link MyPayStatements.dataAreaId}.
   * @param payStatementNumber Key property. See {@link MyPayStatements.payStatementNumber}.
   * @returns A request builder for creating requests that delete an entity of type `MyPayStatements`.
   */
  delete(
    dataAreaId: string,
    payStatementNumber: string
  ): DeleteRequestBuilder<MyPayStatements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MyPayStatements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MyPayStatements` by taking the entity as a parameter.
   */
  delete(
    entity: MyPayStatements<T>
  ): DeleteRequestBuilder<MyPayStatements<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    payStatementNumber?: string
  ): DeleteRequestBuilder<MyPayStatements<T>, T> {
    return new DeleteRequestBuilder<MyPayStatements<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MyPayStatements
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PayStatementNumber: payStatementNumber!
          }
    );
  }
}
