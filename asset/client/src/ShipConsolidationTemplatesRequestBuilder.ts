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
import { ShipConsolidationTemplates } from './ShipConsolidationTemplates';

/**
 * Request builder class for operations supported on the {@link ShipConsolidationTemplates} entity.
 */
export class ShipConsolidationTemplatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShipConsolidationTemplates<T>, T> {
  /**
   * Returns a request builder for querying all `ShipConsolidationTemplates` entities.
   * @returns A request builder for creating requests to retrieve all `ShipConsolidationTemplates` entities.
   */
  getAll(): GetAllRequestBuilder<ShipConsolidationTemplates<T>, T> {
    return new GetAllRequestBuilder<ShipConsolidationTemplates<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ShipConsolidationTemplates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShipConsolidationTemplates`.
   */
  create(
    entity: ShipConsolidationTemplates<T>
  ): CreateRequestBuilder<ShipConsolidationTemplates<T>, T> {
    return new CreateRequestBuilder<ShipConsolidationTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ShipConsolidationTemplates` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShipConsolidationTemplates.dataAreaId}.
   * @param shipConsolidationTemplateName Key property. See {@link ShipConsolidationTemplates.shipConsolidationTemplateName}.
   * @returns A request builder for creating requests to retrieve one `ShipConsolidationTemplates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shipConsolidationTemplateName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShipConsolidationTemplates<T>, T> {
    return new GetByKeyRequestBuilder<ShipConsolidationTemplates<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShipConsolidationTemplateName: shipConsolidationTemplateName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ShipConsolidationTemplates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShipConsolidationTemplates`.
   */
  update(
    entity: ShipConsolidationTemplates<T>
  ): UpdateRequestBuilder<ShipConsolidationTemplates<T>, T> {
    return new UpdateRequestBuilder<ShipConsolidationTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ShipConsolidationTemplates`.
   * @param dataAreaId Key property. See {@link ShipConsolidationTemplates.dataAreaId}.
   * @param shipConsolidationTemplateName Key property. See {@link ShipConsolidationTemplates.shipConsolidationTemplateName}.
   * @returns A request builder for creating requests that delete an entity of type `ShipConsolidationTemplates`.
   */
  delete(
    dataAreaId: string,
    shipConsolidationTemplateName: string
  ): DeleteRequestBuilder<ShipConsolidationTemplates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShipConsolidationTemplates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShipConsolidationTemplates` by taking the entity as a parameter.
   */
  delete(
    entity: ShipConsolidationTemplates<T>
  ): DeleteRequestBuilder<ShipConsolidationTemplates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shipConsolidationTemplateName?: string
  ): DeleteRequestBuilder<ShipConsolidationTemplates<T>, T> {
    return new DeleteRequestBuilder<ShipConsolidationTemplates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShipConsolidationTemplates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShipConsolidationTemplateName: shipConsolidationTemplateName!
          }
    );
  }
}
