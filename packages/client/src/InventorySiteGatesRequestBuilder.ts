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
import { InventorySiteGates } from './InventorySiteGates';
import { InventSiteGateTypeIn } from './InventSiteGateTypeIn';

/**
 * Request builder class for operations supported on the {@link InventorySiteGates} entity.
 */
export class InventorySiteGatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventorySiteGates<T>, T> {
  /**
   * Returns a request builder for querying all `InventorySiteGates` entities.
   * @returns A request builder for creating requests to retrieve all `InventorySiteGates` entities.
   */
  getAll(): GetAllRequestBuilder<InventorySiteGates<T>, T> {
    return new GetAllRequestBuilder<InventorySiteGates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InventorySiteGates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventorySiteGates`.
   */
  create(
    entity: InventorySiteGates<T>
  ): CreateRequestBuilder<InventorySiteGates<T>, T> {
    return new CreateRequestBuilder<InventorySiteGates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventorySiteGates` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventorySiteGates.dataAreaId}.
   * @param gateType Key property. See {@link InventorySiteGates.gateType}.
   * @param gateId Key property. See {@link InventorySiteGates.gateId}.
   * @param siteId Key property. See {@link InventorySiteGates.siteId}.
   * @returns A request builder for creating requests to retrieve one `InventorySiteGates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    gateType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.InventSiteGateType_IN'
    >,
    gateId: DeserializedType<T, 'Edm.String'>,
    siteId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventorySiteGates<T>, T> {
    return new GetByKeyRequestBuilder<InventorySiteGates<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GateType: gateType,
        GateId: gateId,
        SiteId: siteId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventorySiteGates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventorySiteGates`.
   */
  update(
    entity: InventorySiteGates<T>
  ): UpdateRequestBuilder<InventorySiteGates<T>, T> {
    return new UpdateRequestBuilder<InventorySiteGates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventorySiteGates`.
   * @param dataAreaId Key property. See {@link InventorySiteGates.dataAreaId}.
   * @param gateType Key property. See {@link InventorySiteGates.gateType}.
   * @param gateId Key property. See {@link InventorySiteGates.gateId}.
   * @param siteId Key property. See {@link InventorySiteGates.siteId}.
   * @returns A request builder for creating requests that delete an entity of type `InventorySiteGates`.
   */
  delete(
    dataAreaId: string,
    gateType: InventSiteGateTypeIn,
    gateId: string,
    siteId: string
  ): DeleteRequestBuilder<InventorySiteGates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventorySiteGates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventorySiteGates` by taking the entity as a parameter.
   */
  delete(
    entity: InventorySiteGates<T>
  ): DeleteRequestBuilder<InventorySiteGates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    gateType?: InventSiteGateTypeIn,
    gateId?: string,
    siteId?: string
  ): DeleteRequestBuilder<InventorySiteGates<T>, T> {
    return new DeleteRequestBuilder<InventorySiteGates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventorySiteGates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GateType: gateType!,
            GateId: gateId!,
            SiteId: siteId!
          }
    );
  }
}
