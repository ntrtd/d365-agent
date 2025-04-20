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
import { TrvRequisitionTableBiEntities } from './TrvRequisitionTableBiEntities';

/**
 * Request builder class for operations supported on the {@link TrvRequisitionTableBiEntities} entity.
 */
export class TrvRequisitionTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TrvRequisitionTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `TrvRequisitionTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `TrvRequisitionTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<TrvRequisitionTableBiEntities<T>, T> {
    return new GetAllRequestBuilder<TrvRequisitionTableBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TrvRequisitionTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TrvRequisitionTableBiEntities`.
   */
  create(
    entity: TrvRequisitionTableBiEntities<T>
  ): CreateRequestBuilder<TrvRequisitionTableBiEntities<T>, T> {
    return new CreateRequestBuilder<TrvRequisitionTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TrvRequisitionTableBiEntities` entity based on its keys.
   * @param requisitionNumber Key property. See {@link TrvRequisitionTableBiEntities.requisitionNumber}.
   * @param legalEntity Key property. See {@link TrvRequisitionTableBiEntities.legalEntity}.
   * @returns A request builder for creating requests to retrieve one `TrvRequisitionTableBiEntities` entity based on its keys.
   */
  getByKey(
    requisitionNumber: DeserializedType<T, 'Edm.String'>,
    legalEntity: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<TrvRequisitionTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<TrvRequisitionTableBiEntities<T>, T>(
      this.entityApi,
      {
        RequisitionNumber: requisitionNumber,
        LegalEntity: legalEntity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TrvRequisitionTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TrvRequisitionTableBiEntities`.
   */
  update(
    entity: TrvRequisitionTableBiEntities<T>
  ): UpdateRequestBuilder<TrvRequisitionTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<TrvRequisitionTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TrvRequisitionTableBiEntities`.
   * @param requisitionNumber Key property. See {@link TrvRequisitionTableBiEntities.requisitionNumber}.
   * @param legalEntity Key property. See {@link TrvRequisitionTableBiEntities.legalEntity}.
   * @returns A request builder for creating requests that delete an entity of type `TrvRequisitionTableBiEntities`.
   */
  delete(
    requisitionNumber: string,
    legalEntity: BigNumber
  ): DeleteRequestBuilder<TrvRequisitionTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TrvRequisitionTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TrvRequisitionTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: TrvRequisitionTableBiEntities<T>
  ): DeleteRequestBuilder<TrvRequisitionTableBiEntities<T>, T>;
  delete(
    requisitionNumberOrEntity: any,
    legalEntity?: BigNumber
  ): DeleteRequestBuilder<TrvRequisitionTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<TrvRequisitionTableBiEntities<T>, T>(
      this.entityApi,
      requisitionNumberOrEntity instanceof TrvRequisitionTableBiEntities
        ? requisitionNumberOrEntity
        : {
            RequisitionNumber: requisitionNumberOrEntity!,
            LegalEntity: legalEntity!
          }
    );
  }
}
