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
import { VendPackingSlipJourBiEntities } from './VendPackingSlipJourBiEntities';

/**
 * Request builder class for operations supported on the {@link VendPackingSlipJourBiEntities} entity.
 */
export class VendPackingSlipJourBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendPackingSlipJourBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `VendPackingSlipJourBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `VendPackingSlipJourBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<VendPackingSlipJourBiEntities<T>, T> {
    return new GetAllRequestBuilder<VendPackingSlipJourBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendPackingSlipJourBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendPackingSlipJourBiEntities`.
   */
  create(
    entity: VendPackingSlipJourBiEntities<T>
  ): CreateRequestBuilder<VendPackingSlipJourBiEntities<T>, T> {
    return new CreateRequestBuilder<VendPackingSlipJourBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendPackingSlipJourBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendPackingSlipJourBiEntities.dataAreaId}.
   * @param sourceDocumentHeader Key property. See {@link VendPackingSlipJourBiEntities.sourceDocumentHeader}.
   * @param sysDataAreaId Key property. See {@link VendPackingSlipJourBiEntities.sysDataAreaId}.
   * @returns A request builder for creating requests to retrieve one `VendPackingSlipJourBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceDocumentHeader: DeserializedType<T, 'Edm.Int64'>,
    sysDataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendPackingSlipJourBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<VendPackingSlipJourBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceDocumentHeader: sourceDocumentHeader,
        SysDataAreaId: sysDataAreaId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendPackingSlipJourBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendPackingSlipJourBiEntities`.
   */
  update(
    entity: VendPackingSlipJourBiEntities<T>
  ): UpdateRequestBuilder<VendPackingSlipJourBiEntities<T>, T> {
    return new UpdateRequestBuilder<VendPackingSlipJourBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendPackingSlipJourBiEntities`.
   * @param dataAreaId Key property. See {@link VendPackingSlipJourBiEntities.dataAreaId}.
   * @param sourceDocumentHeader Key property. See {@link VendPackingSlipJourBiEntities.sourceDocumentHeader}.
   * @param sysDataAreaId Key property. See {@link VendPackingSlipJourBiEntities.sysDataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `VendPackingSlipJourBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceDocumentHeader: BigNumber,
    sysDataAreaId: string
  ): DeleteRequestBuilder<VendPackingSlipJourBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendPackingSlipJourBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendPackingSlipJourBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: VendPackingSlipJourBiEntities<T>
  ): DeleteRequestBuilder<VendPackingSlipJourBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceDocumentHeader?: BigNumber,
    sysDataAreaId?: string
  ): DeleteRequestBuilder<VendPackingSlipJourBiEntities<T>, T> {
    return new DeleteRequestBuilder<VendPackingSlipJourBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendPackingSlipJourBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceDocumentHeader: sourceDocumentHeader!,
            SysDataAreaId: sysDataAreaId!
          }
    );
  }
}
