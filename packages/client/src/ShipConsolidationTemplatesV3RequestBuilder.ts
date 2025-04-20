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
import { ShipConsolidationTemplatesV3 } from './ShipConsolidationTemplatesV3';

/**
 * Request builder class for operations supported on the {@link ShipConsolidationTemplatesV3} entity.
 */
export class ShipConsolidationTemplatesV3RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShipConsolidationTemplatesV3<T>, T> {
  /**
   * Returns a request builder for querying all `ShipConsolidationTemplatesV3` entities.
   * @returns A request builder for creating requests to retrieve all `ShipConsolidationTemplatesV3` entities.
   */
  getAll(): GetAllRequestBuilder<ShipConsolidationTemplatesV3<T>, T> {
    return new GetAllRequestBuilder<ShipConsolidationTemplatesV3<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ShipConsolidationTemplatesV3` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShipConsolidationTemplatesV3`.
   */
  create(
    entity: ShipConsolidationTemplatesV3<T>
  ): CreateRequestBuilder<ShipConsolidationTemplatesV3<T>, T> {
    return new CreateRequestBuilder<ShipConsolidationTemplatesV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ShipConsolidationTemplatesV3` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShipConsolidationTemplatesV3.dataAreaId}.
   * @param shipConsolidationTemplateName Key property. See {@link ShipConsolidationTemplatesV3.shipConsolidationTemplateName}.
   * @returns A request builder for creating requests to retrieve one `ShipConsolidationTemplatesV3` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shipConsolidationTemplateName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShipConsolidationTemplatesV3<T>, T> {
    return new GetByKeyRequestBuilder<ShipConsolidationTemplatesV3<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShipConsolidationTemplateName: shipConsolidationTemplateName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ShipConsolidationTemplatesV3`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShipConsolidationTemplatesV3`.
   */
  update(
    entity: ShipConsolidationTemplatesV3<T>
  ): UpdateRequestBuilder<ShipConsolidationTemplatesV3<T>, T> {
    return new UpdateRequestBuilder<ShipConsolidationTemplatesV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ShipConsolidationTemplatesV3`.
   * @param dataAreaId Key property. See {@link ShipConsolidationTemplatesV3.dataAreaId}.
   * @param shipConsolidationTemplateName Key property. See {@link ShipConsolidationTemplatesV3.shipConsolidationTemplateName}.
   * @returns A request builder for creating requests that delete an entity of type `ShipConsolidationTemplatesV3`.
   */
  delete(
    dataAreaId: string,
    shipConsolidationTemplateName: string
  ): DeleteRequestBuilder<ShipConsolidationTemplatesV3<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShipConsolidationTemplatesV3`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShipConsolidationTemplatesV3` by taking the entity as a parameter.
   */
  delete(
    entity: ShipConsolidationTemplatesV3<T>
  ): DeleteRequestBuilder<ShipConsolidationTemplatesV3<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shipConsolidationTemplateName?: string
  ): DeleteRequestBuilder<ShipConsolidationTemplatesV3<T>, T> {
    return new DeleteRequestBuilder<ShipConsolidationTemplatesV3<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShipConsolidationTemplatesV3
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShipConsolidationTemplateName: shipConsolidationTemplateName!
          }
    );
  }
}
