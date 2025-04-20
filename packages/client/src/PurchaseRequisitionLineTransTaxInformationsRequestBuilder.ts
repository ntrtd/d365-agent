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
import { PurchaseRequisitionLineTransTaxInformations } from './PurchaseRequisitionLineTransTaxInformations';

/**
 * Request builder class for operations supported on the {@link PurchaseRequisitionLineTransTaxInformations} entity.
 */
export class PurchaseRequisitionLineTransTaxInformationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseRequisitionLineTransTaxInformations<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseRequisitionLineTransTaxInformations` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseRequisitionLineTransTaxInformations` entities.
   */
  getAll(): GetAllRequestBuilder<
    PurchaseRequisitionLineTransTaxInformations<T>,
    T
  > {
    return new GetAllRequestBuilder<
      PurchaseRequisitionLineTransTaxInformations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PurchaseRequisitionLineTransTaxInformations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseRequisitionLineTransTaxInformations`.
   */
  create(
    entity: PurchaseRequisitionLineTransTaxInformations<T>
  ): CreateRequestBuilder<PurchaseRequisitionLineTransTaxInformations<T>, T> {
    return new CreateRequestBuilder<
      PurchaseRequisitionLineTransTaxInformations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PurchaseRequisitionLineTransTaxInformations` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchaseRequisitionLineTransTaxInformations.dataAreaId}.
   * @param sequenceNumber Key property. See {@link PurchaseRequisitionLineTransTaxInformations.sequenceNumber}.
   * @param purchReqTable Key property. See {@link PurchaseRequisitionLineTransTaxInformations.purchReqTable}.
   * @returns A request builder for creating requests to retrieve one `PurchaseRequisitionLineTransTaxInformations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sequenceNumber: DeserializedType<T, 'Edm.Int32'>,
    purchReqTable: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<PurchaseRequisitionLineTransTaxInformations<T>, T> {
    return new GetByKeyRequestBuilder<
      PurchaseRequisitionLineTransTaxInformations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      SequenceNumber: sequenceNumber,
      PurchReqTable: purchReqTable
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseRequisitionLineTransTaxInformations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseRequisitionLineTransTaxInformations`.
   */
  update(
    entity: PurchaseRequisitionLineTransTaxInformations<T>
  ): UpdateRequestBuilder<PurchaseRequisitionLineTransTaxInformations<T>, T> {
    return new UpdateRequestBuilder<
      PurchaseRequisitionLineTransTaxInformations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseRequisitionLineTransTaxInformations`.
   * @param dataAreaId Key property. See {@link PurchaseRequisitionLineTransTaxInformations.dataAreaId}.
   * @param sequenceNumber Key property. See {@link PurchaseRequisitionLineTransTaxInformations.sequenceNumber}.
   * @param purchReqTable Key property. See {@link PurchaseRequisitionLineTransTaxInformations.purchReqTable}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseRequisitionLineTransTaxInformations`.
   */
  delete(
    dataAreaId: string,
    sequenceNumber: number,
    purchReqTable: BigNumber
  ): DeleteRequestBuilder<PurchaseRequisitionLineTransTaxInformations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseRequisitionLineTransTaxInformations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseRequisitionLineTransTaxInformations` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseRequisitionLineTransTaxInformations<T>
  ): DeleteRequestBuilder<PurchaseRequisitionLineTransTaxInformations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sequenceNumber?: number,
    purchReqTable?: BigNumber
  ): DeleteRequestBuilder<PurchaseRequisitionLineTransTaxInformations<T>, T> {
    return new DeleteRequestBuilder<
      PurchaseRequisitionLineTransTaxInformations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchaseRequisitionLineTransTaxInformations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SequenceNumber: sequenceNumber!,
            PurchReqTable: purchReqTable!
          }
    );
  }
}
