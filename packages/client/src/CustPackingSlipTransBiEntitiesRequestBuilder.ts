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
import { CustPackingSlipTransBiEntities } from './CustPackingSlipTransBiEntities';

/**
 * Request builder class for operations supported on the {@link CustPackingSlipTransBiEntities} entity.
 */
export class CustPackingSlipTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustPackingSlipTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `CustPackingSlipTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `CustPackingSlipTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<CustPackingSlipTransBiEntities<T>, T> {
    return new GetAllRequestBuilder<CustPackingSlipTransBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustPackingSlipTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustPackingSlipTransBiEntities`.
   */
  create(
    entity: CustPackingSlipTransBiEntities<T>
  ): CreateRequestBuilder<CustPackingSlipTransBiEntities<T>, T> {
    return new CreateRequestBuilder<CustPackingSlipTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustPackingSlipTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustPackingSlipTransBiEntities.dataAreaId}.
   * @param sourceDocumentLine Key property. See {@link CustPackingSlipTransBiEntities.sourceDocumentLine}.
   * @returns A request builder for creating requests to retrieve one `CustPackingSlipTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<CustPackingSlipTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<CustPackingSlipTransBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceDocumentLine: sourceDocumentLine
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustPackingSlipTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustPackingSlipTransBiEntities`.
   */
  update(
    entity: CustPackingSlipTransBiEntities<T>
  ): UpdateRequestBuilder<CustPackingSlipTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<CustPackingSlipTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustPackingSlipTransBiEntities`.
   * @param dataAreaId Key property. See {@link CustPackingSlipTransBiEntities.dataAreaId}.
   * @param sourceDocumentLine Key property. See {@link CustPackingSlipTransBiEntities.sourceDocumentLine}.
   * @returns A request builder for creating requests that delete an entity of type `CustPackingSlipTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceDocumentLine: BigNumber
  ): DeleteRequestBuilder<CustPackingSlipTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustPackingSlipTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustPackingSlipTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: CustPackingSlipTransBiEntities<T>
  ): DeleteRequestBuilder<CustPackingSlipTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceDocumentLine?: BigNumber
  ): DeleteRequestBuilder<CustPackingSlipTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<CustPackingSlipTransBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustPackingSlipTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceDocumentLine: sourceDocumentLine!
          }
    );
  }
}
