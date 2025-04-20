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
import { CustPackingSlipJourBiEntities } from './CustPackingSlipJourBiEntities';

/**
 * Request builder class for operations supported on the {@link CustPackingSlipJourBiEntities} entity.
 */
export class CustPackingSlipJourBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustPackingSlipJourBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `CustPackingSlipJourBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `CustPackingSlipJourBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<CustPackingSlipJourBiEntities<T>, T> {
    return new GetAllRequestBuilder<CustPackingSlipJourBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustPackingSlipJourBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustPackingSlipJourBiEntities`.
   */
  create(
    entity: CustPackingSlipJourBiEntities<T>
  ): CreateRequestBuilder<CustPackingSlipJourBiEntities<T>, T> {
    return new CreateRequestBuilder<CustPackingSlipJourBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustPackingSlipJourBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustPackingSlipJourBiEntities.dataAreaId}.
   * @param sourceDocumentHeader Key property. See {@link CustPackingSlipJourBiEntities.sourceDocumentHeader}.
   * @returns A request builder for creating requests to retrieve one `CustPackingSlipJourBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceDocumentHeader: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<CustPackingSlipJourBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<CustPackingSlipJourBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceDocumentHeader: sourceDocumentHeader
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustPackingSlipJourBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustPackingSlipJourBiEntities`.
   */
  update(
    entity: CustPackingSlipJourBiEntities<T>
  ): UpdateRequestBuilder<CustPackingSlipJourBiEntities<T>, T> {
    return new UpdateRequestBuilder<CustPackingSlipJourBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustPackingSlipJourBiEntities`.
   * @param dataAreaId Key property. See {@link CustPackingSlipJourBiEntities.dataAreaId}.
   * @param sourceDocumentHeader Key property. See {@link CustPackingSlipJourBiEntities.sourceDocumentHeader}.
   * @returns A request builder for creating requests that delete an entity of type `CustPackingSlipJourBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceDocumentHeader: BigNumber
  ): DeleteRequestBuilder<CustPackingSlipJourBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustPackingSlipJourBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustPackingSlipJourBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: CustPackingSlipJourBiEntities<T>
  ): DeleteRequestBuilder<CustPackingSlipJourBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceDocumentHeader?: BigNumber
  ): DeleteRequestBuilder<CustPackingSlipJourBiEntities<T>, T> {
    return new DeleteRequestBuilder<CustPackingSlipJourBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustPackingSlipJourBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceDocumentHeader: sourceDocumentHeader!
          }
    );
  }
}
