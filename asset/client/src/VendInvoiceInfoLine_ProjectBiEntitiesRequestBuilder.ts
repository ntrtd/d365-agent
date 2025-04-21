/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { VendInvoiceInfoLine_ProjectBiEntities } from './VendInvoiceInfoLine_ProjectBiEntities';

/**
 * Request builder class for operations supported on the {@link VendInvoiceInfoLine_ProjectBiEntities} entity.
 */
export class VendInvoiceInfoLine_ProjectBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendInvoiceInfoLine_ProjectBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `VendInvoiceInfoLine_ProjectBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `VendInvoiceInfoLine_ProjectBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<VendInvoiceInfoLine_ProjectBiEntities<T>, T> {
    return new GetAllRequestBuilder<
      VendInvoiceInfoLine_ProjectBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendInvoiceInfoLine_ProjectBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendInvoiceInfoLine_ProjectBiEntities`.
   */
  create(
    entity: VendInvoiceInfoLine_ProjectBiEntities<T>
  ): CreateRequestBuilder<VendInvoiceInfoLine_ProjectBiEntities<T>, T> {
    return new CreateRequestBuilder<
      VendInvoiceInfoLine_ProjectBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `VendInvoiceInfoLine_ProjectBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendInvoiceInfoLine_ProjectBiEntities.dataAreaId}.
   * @param vendInvoiceInfoLineRefRecId Key property. See {@link VendInvoiceInfoLine_ProjectBiEntities.vendInvoiceInfoLineRefRecId}.
   * @returns A request builder for creating requests to retrieve one `VendInvoiceInfoLine_ProjectBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    vendInvoiceInfoLineRefRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<VendInvoiceInfoLine_ProjectBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      VendInvoiceInfoLine_ProjectBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      VendInvoiceInfoLineRefRecId: vendInvoiceInfoLineRefRecId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `VendInvoiceInfoLine_ProjectBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendInvoiceInfoLine_ProjectBiEntities`.
   */
  update(
    entity: VendInvoiceInfoLine_ProjectBiEntities<T>
  ): UpdateRequestBuilder<VendInvoiceInfoLine_ProjectBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      VendInvoiceInfoLine_ProjectBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceInfoLine_ProjectBiEntities`.
   * @param dataAreaId Key property. See {@link VendInvoiceInfoLine_ProjectBiEntities.dataAreaId}.
   * @param vendInvoiceInfoLineRefRecId Key property. See {@link VendInvoiceInfoLine_ProjectBiEntities.vendInvoiceInfoLineRefRecId}.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceInfoLine_ProjectBiEntities`.
   */
  delete(
    dataAreaId: string,
    vendInvoiceInfoLineRefRecId: BigNumber
  ): DeleteRequestBuilder<VendInvoiceInfoLine_ProjectBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceInfoLine_ProjectBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceInfoLine_ProjectBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: VendInvoiceInfoLine_ProjectBiEntities<T>
  ): DeleteRequestBuilder<VendInvoiceInfoLine_ProjectBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    vendInvoiceInfoLineRefRecId?: BigNumber
  ): DeleteRequestBuilder<VendInvoiceInfoLine_ProjectBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      VendInvoiceInfoLine_ProjectBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendInvoiceInfoLine_ProjectBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VendInvoiceInfoLineRefRecId: vendInvoiceInfoLineRefRecId!
          }
    );
  }
}
