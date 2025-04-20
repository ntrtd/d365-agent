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
import { WorkTypeTables } from './WorkTypeTables';

/**
 * Request builder class for operations supported on the {@link WorkTypeTables} entity.
 */
export class WorkTypeTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkTypeTables<T>, T> {
  /**
   * Returns a request builder for querying all `WorkTypeTables` entities.
   * @returns A request builder for creating requests to retrieve all `WorkTypeTables` entities.
   */
  getAll(): GetAllRequestBuilder<WorkTypeTables<T>, T> {
    return new GetAllRequestBuilder<WorkTypeTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkTypeTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkTypeTables`.
   */
  create(
    entity: WorkTypeTables<T>
  ): CreateRequestBuilder<WorkTypeTables<T>, T> {
    return new CreateRequestBuilder<WorkTypeTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkTypeTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link WorkTypeTables.dataAreaId}.
   * @param typeOfWorks Key property. See {@link WorkTypeTables.typeOfWorks}.
   * @returns A request builder for creating requests to retrieve one `WorkTypeTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    typeOfWorks: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkTypeTables<T>, T> {
    return new GetByKeyRequestBuilder<WorkTypeTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      TypeOfWorks: typeOfWorks
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WorkTypeTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkTypeTables`.
   */
  update(
    entity: WorkTypeTables<T>
  ): UpdateRequestBuilder<WorkTypeTables<T>, T> {
    return new UpdateRequestBuilder<WorkTypeTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkTypeTables`.
   * @param dataAreaId Key property. See {@link WorkTypeTables.dataAreaId}.
   * @param typeOfWorks Key property. See {@link WorkTypeTables.typeOfWorks}.
   * @returns A request builder for creating requests that delete an entity of type `WorkTypeTables`.
   */
  delete(
    dataAreaId: string,
    typeOfWorks: string
  ): DeleteRequestBuilder<WorkTypeTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkTypeTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkTypeTables` by taking the entity as a parameter.
   */
  delete(entity: WorkTypeTables<T>): DeleteRequestBuilder<WorkTypeTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    typeOfWorks?: string
  ): DeleteRequestBuilder<WorkTypeTables<T>, T> {
    return new DeleteRequestBuilder<WorkTypeTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WorkTypeTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TypeOfWorks: typeOfWorks!
          }
    );
  }
}
