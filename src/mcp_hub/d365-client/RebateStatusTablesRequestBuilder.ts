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
import { RebateStatusTables } from './RebateStatusTables';

/**
 * Request builder class for operations supported on the {@link RebateStatusTables} entity.
 */
export class RebateStatusTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RebateStatusTables<T>, T> {
  /**
   * Returns a request builder for querying all `RebateStatusTables` entities.
   * @returns A request builder for creating requests to retrieve all `RebateStatusTables` entities.
   */
  getAll(): GetAllRequestBuilder<RebateStatusTables<T>, T> {
    return new GetAllRequestBuilder<RebateStatusTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RebateStatusTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RebateStatusTables`.
   */
  create(
    entity: RebateStatusTables<T>
  ): CreateRequestBuilder<RebateStatusTables<T>, T> {
    return new CreateRequestBuilder<RebateStatusTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RebateStatusTables` entity based on its keys.
   * @param statusId Key property. See {@link RebateStatusTables.statusId}.
   * @returns A request builder for creating requests to retrieve one `RebateStatusTables` entity based on its keys.
   */
  getByKey(
    statusId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RebateStatusTables<T>, T> {
    return new GetByKeyRequestBuilder<RebateStatusTables<T>, T>(
      this.entityApi,
      { StatusId: statusId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RebateStatusTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RebateStatusTables`.
   */
  update(
    entity: RebateStatusTables<T>
  ): UpdateRequestBuilder<RebateStatusTables<T>, T> {
    return new UpdateRequestBuilder<RebateStatusTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RebateStatusTables`.
   * @param statusId Key property. See {@link RebateStatusTables.statusId}.
   * @returns A request builder for creating requests that delete an entity of type `RebateStatusTables`.
   */
  delete(statusId: string): DeleteRequestBuilder<RebateStatusTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RebateStatusTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RebateStatusTables` by taking the entity as a parameter.
   */
  delete(
    entity: RebateStatusTables<T>
  ): DeleteRequestBuilder<RebateStatusTables<T>, T>;
  delete(
    statusIdOrEntity: any
  ): DeleteRequestBuilder<RebateStatusTables<T>, T> {
    return new DeleteRequestBuilder<RebateStatusTables<T>, T>(
      this.entityApi,
      statusIdOrEntity instanceof RebateStatusTables
        ? statusIdOrEntity
        : { StatusId: statusIdOrEntity! }
    );
  }
}
