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
import { VendorRebateAgreementLines } from './VendorRebateAgreementLines';

/**
 * Request builder class for operations supported on the {@link VendorRebateAgreementLines} entity.
 */
export class VendorRebateAgreementLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorRebateAgreementLines<T>, T> {
  /**
   * Returns a request builder for querying all `VendorRebateAgreementLines` entities.
   * @returns A request builder for creating requests to retrieve all `VendorRebateAgreementLines` entities.
   */
  getAll(): GetAllRequestBuilder<VendorRebateAgreementLines<T>, T> {
    return new GetAllRequestBuilder<VendorRebateAgreementLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendorRebateAgreementLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorRebateAgreementLines`.
   */
  create(
    entity: VendorRebateAgreementLines<T>
  ): CreateRequestBuilder<VendorRebateAgreementLines<T>, T> {
    return new CreateRequestBuilder<VendorRebateAgreementLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorRebateAgreementLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorRebateAgreementLines.dataAreaId}.
   * @param rebateAgreementId Key property. See {@link VendorRebateAgreementLines.rebateAgreementId}.
   * @param lineNumber Key property. See {@link VendorRebateAgreementLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `VendorRebateAgreementLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    rebateAgreementId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<VendorRebateAgreementLines<T>, T> {
    return new GetByKeyRequestBuilder<VendorRebateAgreementLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RebateAgreementId: rebateAgreementId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendorRebateAgreementLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorRebateAgreementLines`.
   */
  update(
    entity: VendorRebateAgreementLines<T>
  ): UpdateRequestBuilder<VendorRebateAgreementLines<T>, T> {
    return new UpdateRequestBuilder<VendorRebateAgreementLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorRebateAgreementLines`.
   * @param dataAreaId Key property. See {@link VendorRebateAgreementLines.dataAreaId}.
   * @param rebateAgreementId Key property. See {@link VendorRebateAgreementLines.rebateAgreementId}.
   * @param lineNumber Key property. See {@link VendorRebateAgreementLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `VendorRebateAgreementLines`.
   */
  delete(
    dataAreaId: string,
    rebateAgreementId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<VendorRebateAgreementLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorRebateAgreementLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorRebateAgreementLines` by taking the entity as a parameter.
   */
  delete(
    entity: VendorRebateAgreementLines<T>
  ): DeleteRequestBuilder<VendorRebateAgreementLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    rebateAgreementId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<VendorRebateAgreementLines<T>, T> {
    return new DeleteRequestBuilder<VendorRebateAgreementLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorRebateAgreementLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RebateAgreementId: rebateAgreementId!,
            LineNumber: lineNumber!
          }
    );
  }
}
