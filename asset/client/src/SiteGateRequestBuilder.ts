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
import { SiteGate } from './SiteGate';
import { InventSiteGateTypeIn } from './InventSiteGateTypeIn';

/**
 * Request builder class for operations supported on the {@link SiteGate} entity.
 */
export class SiteGateRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SiteGate<T>, T> {
  /**
   * Returns a request builder for querying all `SiteGate` entities.
   * @returns A request builder for creating requests to retrieve all `SiteGate` entities.
   */
  getAll(): GetAllRequestBuilder<SiteGate<T>, T> {
    return new GetAllRequestBuilder<SiteGate<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SiteGate` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SiteGate`.
   */
  create(entity: SiteGate<T>): CreateRequestBuilder<SiteGate<T>, T> {
    return new CreateRequestBuilder<SiteGate<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SiteGate` entity based on its keys.
   * @param dataAreaId Key property. See {@link SiteGate.dataAreaId}.
   * @param type Key property. See {@link SiteGate.type}.
   * @param gateId Key property. See {@link SiteGate.gateId}.
   * @param siteId Key property. See {@link SiteGate.siteId}.
   * @returns A request builder for creating requests to retrieve one `SiteGate` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    type: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.InventSiteGateType_IN'
    >,
    gateId: DeserializedType<T, 'Edm.String'>,
    siteId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SiteGate<T>, T> {
    return new GetByKeyRequestBuilder<SiteGate<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Type: type,
      GateId: gateId,
      SiteId: siteId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SiteGate`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SiteGate`.
   */
  update(entity: SiteGate<T>): UpdateRequestBuilder<SiteGate<T>, T> {
    return new UpdateRequestBuilder<SiteGate<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SiteGate`.
   * @param dataAreaId Key property. See {@link SiteGate.dataAreaId}.
   * @param type Key property. See {@link SiteGate.type}.
   * @param gateId Key property. See {@link SiteGate.gateId}.
   * @param siteId Key property. See {@link SiteGate.siteId}.
   * @returns A request builder for creating requests that delete an entity of type `SiteGate`.
   */
  delete(
    dataAreaId: string,
    type: InventSiteGateTypeIn,
    gateId: string,
    siteId: string
  ): DeleteRequestBuilder<SiteGate<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SiteGate`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SiteGate` by taking the entity as a parameter.
   */
  delete(entity: SiteGate<T>): DeleteRequestBuilder<SiteGate<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    type?: InventSiteGateTypeIn,
    gateId?: string,
    siteId?: string
  ): DeleteRequestBuilder<SiteGate<T>, T> {
    return new DeleteRequestBuilder<SiteGate<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SiteGate
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Type: type!,
            GateId: gateId!,
            SiteId: siteId!
          }
    );
  }
}
