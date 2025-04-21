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
import { TotalCompStatementSectionsHeader } from './TotalCompStatementSectionsHeader';

/**
 * Request builder class for operations supported on the {@link TotalCompStatementSectionsHeader} entity.
 */
export class TotalCompStatementSectionsHeaderRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TotalCompStatementSectionsHeader<T>, T> {
  /**
   * Returns a request builder for querying all `TotalCompStatementSectionsHeader` entities.
   * @returns A request builder for creating requests to retrieve all `TotalCompStatementSectionsHeader` entities.
   */
  getAll(): GetAllRequestBuilder<TotalCompStatementSectionsHeader<T>, T> {
    return new GetAllRequestBuilder<TotalCompStatementSectionsHeader<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TotalCompStatementSectionsHeader` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TotalCompStatementSectionsHeader`.
   */
  create(
    entity: TotalCompStatementSectionsHeader<T>
  ): CreateRequestBuilder<TotalCompStatementSectionsHeader<T>, T> {
    return new CreateRequestBuilder<TotalCompStatementSectionsHeader<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TotalCompStatementSectionsHeader` entity based on its keys.
   * @param statementSectionId Key property. See {@link TotalCompStatementSectionsHeader.statementSectionId}.
   * @returns A request builder for creating requests to retrieve one `TotalCompStatementSectionsHeader` entity based on its keys.
   */
  getByKey(
    statementSectionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TotalCompStatementSectionsHeader<T>, T> {
    return new GetByKeyRequestBuilder<TotalCompStatementSectionsHeader<T>, T>(
      this.entityApi,
      { StatementSectionId: statementSectionId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TotalCompStatementSectionsHeader`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TotalCompStatementSectionsHeader`.
   */
  update(
    entity: TotalCompStatementSectionsHeader<T>
  ): UpdateRequestBuilder<TotalCompStatementSectionsHeader<T>, T> {
    return new UpdateRequestBuilder<TotalCompStatementSectionsHeader<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TotalCompStatementSectionsHeader`.
   * @param statementSectionId Key property. See {@link TotalCompStatementSectionsHeader.statementSectionId}.
   * @returns A request builder for creating requests that delete an entity of type `TotalCompStatementSectionsHeader`.
   */
  delete(
    statementSectionId: string
  ): DeleteRequestBuilder<TotalCompStatementSectionsHeader<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TotalCompStatementSectionsHeader`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TotalCompStatementSectionsHeader` by taking the entity as a parameter.
   */
  delete(
    entity: TotalCompStatementSectionsHeader<T>
  ): DeleteRequestBuilder<TotalCompStatementSectionsHeader<T>, T>;
  delete(
    statementSectionIdOrEntity: any
  ): DeleteRequestBuilder<TotalCompStatementSectionsHeader<T>, T> {
    return new DeleteRequestBuilder<TotalCompStatementSectionsHeader<T>, T>(
      this.entityApi,
      statementSectionIdOrEntity instanceof TotalCompStatementSectionsHeader
        ? statementSectionIdOrEntity
        : { StatementSectionId: statementSectionIdOrEntity! }
    );
  }
}
