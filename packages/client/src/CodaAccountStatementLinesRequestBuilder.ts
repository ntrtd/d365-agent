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
import { CodaAccountStatementLines } from './CodaAccountStatementLines';

/**
 * Request builder class for operations supported on the {@link CodaAccountStatementLines} entity.
 */
export class CodaAccountStatementLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CodaAccountStatementLines<T>, T> {
  /**
   * Returns a request builder for querying all `CodaAccountStatementLines` entities.
   * @returns A request builder for creating requests to retrieve all `CodaAccountStatementLines` entities.
   */
  getAll(): GetAllRequestBuilder<CodaAccountStatementLines<T>, T> {
    return new GetAllRequestBuilder<CodaAccountStatementLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CodaAccountStatementLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CodaAccountStatementLines`.
   */
  create(
    entity: CodaAccountStatementLines<T>
  ): CreateRequestBuilder<CodaAccountStatementLines<T>, T> {
    return new CreateRequestBuilder<CodaAccountStatementLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CodaAccountStatementLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link CodaAccountStatementLines.dataAreaId}.
   * @param guid Key property. See {@link CodaAccountStatementLines.guid}.
   * @returns A request builder for creating requests to retrieve one `CodaAccountStatementLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    guid: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<CodaAccountStatementLines<T>, T> {
    return new GetByKeyRequestBuilder<CodaAccountStatementLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GUID: guid
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CodaAccountStatementLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CodaAccountStatementLines`.
   */
  update(
    entity: CodaAccountStatementLines<T>
  ): UpdateRequestBuilder<CodaAccountStatementLines<T>, T> {
    return new UpdateRequestBuilder<CodaAccountStatementLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CodaAccountStatementLines`.
   * @param dataAreaId Key property. See {@link CodaAccountStatementLines.dataAreaId}.
   * @param guid Key property. See {@link CodaAccountStatementLines.guid}.
   * @returns A request builder for creating requests that delete an entity of type `CodaAccountStatementLines`.
   */
  delete(
    dataAreaId: string,
    guid: string
  ): DeleteRequestBuilder<CodaAccountStatementLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CodaAccountStatementLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CodaAccountStatementLines` by taking the entity as a parameter.
   */
  delete(
    entity: CodaAccountStatementLines<T>
  ): DeleteRequestBuilder<CodaAccountStatementLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    guid?: string
  ): DeleteRequestBuilder<CodaAccountStatementLines<T>, T> {
    return new DeleteRequestBuilder<CodaAccountStatementLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CodaAccountStatementLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GUID: guid!
          }
    );
  }
}
