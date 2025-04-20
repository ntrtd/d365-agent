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
import { MarkupTableBiEntities } from './MarkupTableBiEntities';
import { MarkupModuleType } from './MarkupModuleType';

/**
 * Request builder class for operations supported on the {@link MarkupTableBiEntities} entity.
 */
export class MarkupTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MarkupTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `MarkupTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `MarkupTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<MarkupTableBiEntities<T>, T> {
    return new GetAllRequestBuilder<MarkupTableBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MarkupTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MarkupTableBiEntities`.
   */
  create(
    entity: MarkupTableBiEntities<T>
  ): CreateRequestBuilder<MarkupTableBiEntities<T>, T> {
    return new CreateRequestBuilder<MarkupTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MarkupTableBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link MarkupTableBiEntities.dataAreaId}.
   * @param moduleType Key property. See {@link MarkupTableBiEntities.moduleType}.
   * @param markupCode Key property. See {@link MarkupTableBiEntities.markupCode}.
   * @returns A request builder for creating requests to retrieve one `MarkupTableBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    moduleType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.MarkupModuleType'
    >,
    markupCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MarkupTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<MarkupTableBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ModuleType: moduleType,
        MarkupCode: markupCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MarkupTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MarkupTableBiEntities`.
   */
  update(
    entity: MarkupTableBiEntities<T>
  ): UpdateRequestBuilder<MarkupTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<MarkupTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MarkupTableBiEntities`.
   * @param dataAreaId Key property. See {@link MarkupTableBiEntities.dataAreaId}.
   * @param moduleType Key property. See {@link MarkupTableBiEntities.moduleType}.
   * @param markupCode Key property. See {@link MarkupTableBiEntities.markupCode}.
   * @returns A request builder for creating requests that delete an entity of type `MarkupTableBiEntities`.
   */
  delete(
    dataAreaId: string,
    moduleType: MarkupModuleType,
    markupCode: string
  ): DeleteRequestBuilder<MarkupTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MarkupTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MarkupTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: MarkupTableBiEntities<T>
  ): DeleteRequestBuilder<MarkupTableBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    moduleType?: MarkupModuleType,
    markupCode?: string
  ): DeleteRequestBuilder<MarkupTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<MarkupTableBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MarkupTableBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ModuleType: moduleType!,
            MarkupCode: markupCode!
          }
    );
  }
}
