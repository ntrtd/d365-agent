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
import { AutoNumberingTables } from './AutoNumberingTables';

/**
 * Request builder class for operations supported on the {@link AutoNumberingTables} entity.
 */
export class AutoNumberingTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AutoNumberingTables<T>, T> {
  /**
   * Returns a request builder for querying all `AutoNumberingTables` entities.
   * @returns A request builder for creating requests to retrieve all `AutoNumberingTables` entities.
   */
  getAll(): GetAllRequestBuilder<AutoNumberingTables<T>, T> {
    return new GetAllRequestBuilder<AutoNumberingTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AutoNumberingTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AutoNumberingTables`.
   */
  create(
    entity: AutoNumberingTables<T>
  ): CreateRequestBuilder<AutoNumberingTables<T>, T> {
    return new CreateRequestBuilder<AutoNumberingTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AutoNumberingTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link AutoNumberingTables.dataAreaId}.
   * @param numbering Key property. See {@link AutoNumberingTables.numbering}.
   * @returns A request builder for creating requests to retrieve one `AutoNumberingTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    numbering: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AutoNumberingTables<T>, T> {
    return new GetByKeyRequestBuilder<AutoNumberingTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Numbering: numbering
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AutoNumberingTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AutoNumberingTables`.
   */
  update(
    entity: AutoNumberingTables<T>
  ): UpdateRequestBuilder<AutoNumberingTables<T>, T> {
    return new UpdateRequestBuilder<AutoNumberingTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AutoNumberingTables`.
   * @param dataAreaId Key property. See {@link AutoNumberingTables.dataAreaId}.
   * @param numbering Key property. See {@link AutoNumberingTables.numbering}.
   * @returns A request builder for creating requests that delete an entity of type `AutoNumberingTables`.
   */
  delete(
    dataAreaId: string,
    numbering: string
  ): DeleteRequestBuilder<AutoNumberingTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AutoNumberingTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AutoNumberingTables` by taking the entity as a parameter.
   */
  delete(
    entity: AutoNumberingTables<T>
  ): DeleteRequestBuilder<AutoNumberingTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    numbering?: string
  ): DeleteRequestBuilder<AutoNumberingTables<T>, T> {
    return new DeleteRequestBuilder<AutoNumberingTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AutoNumberingTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Numbering: numbering!
          }
    );
  }
}
