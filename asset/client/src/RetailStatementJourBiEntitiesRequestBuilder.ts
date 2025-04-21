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
import { RetailStatementJourBiEntities } from './RetailStatementJourBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailStatementJourBiEntities} entity.
 */
export class RetailStatementJourBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailStatementJourBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailStatementJourBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailStatementJourBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<RetailStatementJourBiEntities<T>, T> {
    return new GetAllRequestBuilder<RetailStatementJourBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailStatementJourBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailStatementJourBiEntities`.
   */
  create(
    entity: RetailStatementJourBiEntities<T>
  ): CreateRequestBuilder<RetailStatementJourBiEntities<T>, T> {
    return new CreateRequestBuilder<RetailStatementJourBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailStatementJourBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailStatementJourBiEntities.dataAreaId}.
   * @param statementId Key property. See {@link RetailStatementJourBiEntities.statementId}.
   * @returns A request builder for creating requests to retrieve one `RetailStatementJourBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    statementId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailStatementJourBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<RetailStatementJourBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        statementId: statementId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailStatementJourBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailStatementJourBiEntities`.
   */
  update(
    entity: RetailStatementJourBiEntities<T>
  ): UpdateRequestBuilder<RetailStatementJourBiEntities<T>, T> {
    return new UpdateRequestBuilder<RetailStatementJourBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailStatementJourBiEntities`.
   * @param dataAreaId Key property. See {@link RetailStatementJourBiEntities.dataAreaId}.
   * @param statementId Key property. See {@link RetailStatementJourBiEntities.statementId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailStatementJourBiEntities`.
   */
  delete(
    dataAreaId: string,
    statementId: string
  ): DeleteRequestBuilder<RetailStatementJourBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailStatementJourBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailStatementJourBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailStatementJourBiEntities<T>
  ): DeleteRequestBuilder<RetailStatementJourBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    statementId?: string
  ): DeleteRequestBuilder<RetailStatementJourBiEntities<T>, T> {
    return new DeleteRequestBuilder<RetailStatementJourBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailStatementJourBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            statementId: statementId!
          }
    );
  }
}
