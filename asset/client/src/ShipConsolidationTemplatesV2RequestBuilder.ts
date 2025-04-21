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
import { ShipConsolidationTemplatesV2 } from './ShipConsolidationTemplatesV2';

/**
 * Request builder class for operations supported on the {@link ShipConsolidationTemplatesV2} entity.
 */
export class ShipConsolidationTemplatesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShipConsolidationTemplatesV2<T>, T> {
  /**
   * Returns a request builder for querying all `ShipConsolidationTemplatesV2` entities.
   * @returns A request builder for creating requests to retrieve all `ShipConsolidationTemplatesV2` entities.
   */
  getAll(): GetAllRequestBuilder<ShipConsolidationTemplatesV2<T>, T> {
    return new GetAllRequestBuilder<ShipConsolidationTemplatesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ShipConsolidationTemplatesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShipConsolidationTemplatesV2`.
   */
  create(
    entity: ShipConsolidationTemplatesV2<T>
  ): CreateRequestBuilder<ShipConsolidationTemplatesV2<T>, T> {
    return new CreateRequestBuilder<ShipConsolidationTemplatesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ShipConsolidationTemplatesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShipConsolidationTemplatesV2.dataAreaId}.
   * @param shipConsolidationTemplateName Key property. See {@link ShipConsolidationTemplatesV2.shipConsolidationTemplateName}.
   * @returns A request builder for creating requests to retrieve one `ShipConsolidationTemplatesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shipConsolidationTemplateName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShipConsolidationTemplatesV2<T>, T> {
    return new GetByKeyRequestBuilder<ShipConsolidationTemplatesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShipConsolidationTemplateName: shipConsolidationTemplateName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ShipConsolidationTemplatesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShipConsolidationTemplatesV2`.
   */
  update(
    entity: ShipConsolidationTemplatesV2<T>
  ): UpdateRequestBuilder<ShipConsolidationTemplatesV2<T>, T> {
    return new UpdateRequestBuilder<ShipConsolidationTemplatesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ShipConsolidationTemplatesV2`.
   * @param dataAreaId Key property. See {@link ShipConsolidationTemplatesV2.dataAreaId}.
   * @param shipConsolidationTemplateName Key property. See {@link ShipConsolidationTemplatesV2.shipConsolidationTemplateName}.
   * @returns A request builder for creating requests that delete an entity of type `ShipConsolidationTemplatesV2`.
   */
  delete(
    dataAreaId: string,
    shipConsolidationTemplateName: string
  ): DeleteRequestBuilder<ShipConsolidationTemplatesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShipConsolidationTemplatesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShipConsolidationTemplatesV2` by taking the entity as a parameter.
   */
  delete(
    entity: ShipConsolidationTemplatesV2<T>
  ): DeleteRequestBuilder<ShipConsolidationTemplatesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shipConsolidationTemplateName?: string
  ): DeleteRequestBuilder<ShipConsolidationTemplatesV2<T>, T> {
    return new DeleteRequestBuilder<ShipConsolidationTemplatesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShipConsolidationTemplatesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShipConsolidationTemplateName: shipConsolidationTemplateName!
          }
    );
  }
}
