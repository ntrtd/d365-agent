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
import { WarehouseReplenishmentTemplates } from './WarehouseReplenishmentTemplates';

/**
 * Request builder class for operations supported on the {@link WarehouseReplenishmentTemplates} entity.
 */
export class WarehouseReplenishmentTemplatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WarehouseReplenishmentTemplates<T>, T> {
  /**
   * Returns a request builder for querying all `WarehouseReplenishmentTemplates` entities.
   * @returns A request builder for creating requests to retrieve all `WarehouseReplenishmentTemplates` entities.
   */
  getAll(): GetAllRequestBuilder<WarehouseReplenishmentTemplates<T>, T> {
    return new GetAllRequestBuilder<WarehouseReplenishmentTemplates<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WarehouseReplenishmentTemplates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehouseReplenishmentTemplates`.
   */
  create(
    entity: WarehouseReplenishmentTemplates<T>
  ): CreateRequestBuilder<WarehouseReplenishmentTemplates<T>, T> {
    return new CreateRequestBuilder<WarehouseReplenishmentTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WarehouseReplenishmentTemplates` entity based on its keys.
   * @param dataAreaId Key property. See {@link WarehouseReplenishmentTemplates.dataAreaId}.
   * @param templateId Key property. See {@link WarehouseReplenishmentTemplates.templateId}.
   * @returns A request builder for creating requests to retrieve one `WarehouseReplenishmentTemplates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    templateId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WarehouseReplenishmentTemplates<T>, T> {
    return new GetByKeyRequestBuilder<WarehouseReplenishmentTemplates<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TemplateId: templateId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WarehouseReplenishmentTemplates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehouseReplenishmentTemplates`.
   */
  update(
    entity: WarehouseReplenishmentTemplates<T>
  ): UpdateRequestBuilder<WarehouseReplenishmentTemplates<T>, T> {
    return new UpdateRequestBuilder<WarehouseReplenishmentTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehouseReplenishmentTemplates`.
   * @param dataAreaId Key property. See {@link WarehouseReplenishmentTemplates.dataAreaId}.
   * @param templateId Key property. See {@link WarehouseReplenishmentTemplates.templateId}.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseReplenishmentTemplates`.
   */
  delete(
    dataAreaId: string,
    templateId: string
  ): DeleteRequestBuilder<WarehouseReplenishmentTemplates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WarehouseReplenishmentTemplates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseReplenishmentTemplates` by taking the entity as a parameter.
   */
  delete(
    entity: WarehouseReplenishmentTemplates<T>
  ): DeleteRequestBuilder<WarehouseReplenishmentTemplates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    templateId?: string
  ): DeleteRequestBuilder<WarehouseReplenishmentTemplates<T>, T> {
    return new DeleteRequestBuilder<WarehouseReplenishmentTemplates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WarehouseReplenishmentTemplates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TemplateId: templateId!
          }
    );
  }
}
