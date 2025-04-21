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
import { VendPackingSlipTransBiEntities } from './VendPackingSlipTransBiEntities';

/**
 * Request builder class for operations supported on the {@link VendPackingSlipTransBiEntities} entity.
 */
export class VendPackingSlipTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendPackingSlipTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `VendPackingSlipTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `VendPackingSlipTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<VendPackingSlipTransBiEntities<T>, T> {
    return new GetAllRequestBuilder<VendPackingSlipTransBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendPackingSlipTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendPackingSlipTransBiEntities`.
   */
  create(
    entity: VendPackingSlipTransBiEntities<T>
  ): CreateRequestBuilder<VendPackingSlipTransBiEntities<T>, T> {
    return new CreateRequestBuilder<VendPackingSlipTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendPackingSlipTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendPackingSlipTransBiEntities.dataAreaId}.
   * @param sourceDocumentLine Key property. See {@link VendPackingSlipTransBiEntities.sourceDocumentLine}.
   * @param sysDataAreaId Key property. See {@link VendPackingSlipTransBiEntities.sysDataAreaId}.
   * @returns A request builder for creating requests to retrieve one `VendPackingSlipTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>,
    sysDataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendPackingSlipTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<VendPackingSlipTransBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceDocumentLine: sourceDocumentLine,
        SysDataAreaId: sysDataAreaId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendPackingSlipTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendPackingSlipTransBiEntities`.
   */
  update(
    entity: VendPackingSlipTransBiEntities<T>
  ): UpdateRequestBuilder<VendPackingSlipTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<VendPackingSlipTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendPackingSlipTransBiEntities`.
   * @param dataAreaId Key property. See {@link VendPackingSlipTransBiEntities.dataAreaId}.
   * @param sourceDocumentLine Key property. See {@link VendPackingSlipTransBiEntities.sourceDocumentLine}.
   * @param sysDataAreaId Key property. See {@link VendPackingSlipTransBiEntities.sysDataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `VendPackingSlipTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceDocumentLine: BigNumber,
    sysDataAreaId: string
  ): DeleteRequestBuilder<VendPackingSlipTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendPackingSlipTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendPackingSlipTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: VendPackingSlipTransBiEntities<T>
  ): DeleteRequestBuilder<VendPackingSlipTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceDocumentLine?: BigNumber,
    sysDataAreaId?: string
  ): DeleteRequestBuilder<VendPackingSlipTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<VendPackingSlipTransBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendPackingSlipTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceDocumentLine: sourceDocumentLine!,
            SysDataAreaId: sysDataAreaId!
          }
    );
  }
}
