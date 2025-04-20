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
import { FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes } from './FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes';

/**
 * Request builder class for operations supported on the {@link FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes} entity.
 */
export class FbFiscalDocumentAdjustmentCodeIcmsTaxationCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes<T>,
  T
> {
  /**
   * Returns a request builder for querying all `FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes` entities.
   * @returns A request builder for creating requests to retrieve all `FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes` entities.
   */
  getAll(): GetAllRequestBuilder<
    FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes<T>,
    T
  > {
    return new GetAllRequestBuilder<
      FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes`.
   */
  create(
    entity: FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes<T>
  ): CreateRequestBuilder<
    FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes<T>,
    T
  > {
    return new CreateRequestBuilder<
      FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes.dataAreaId}.
   * @param taxationCode Key property. See {@link FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes.taxationCode}.
   * @param spedAdjustmentCode Key property. See {@link FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes.spedAdjustmentCode}.
   * @returns A request builder for creating requests to retrieve one `FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxationCode: DeserializedType<T, 'Edm.String'>,
    spedAdjustmentCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      TaxationCode: taxationCode,
      SpedAdjustmentCode: spedAdjustmentCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes`.
   */
  update(
    entity: FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes<T>
  ): UpdateRequestBuilder<
    FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes<T>,
    T
  > {
    return new UpdateRequestBuilder<
      FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes`.
   * @param dataAreaId Key property. See {@link FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes.dataAreaId}.
   * @param taxationCode Key property. See {@link FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes.taxationCode}.
   * @param spedAdjustmentCode Key property. See {@link FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes.spedAdjustmentCode}.
   * @returns A request builder for creating requests that delete an entity of type `FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes`.
   */
  delete(
    dataAreaId: string,
    taxationCode: string,
    spedAdjustmentCode: string
  ): DeleteRequestBuilder<
    FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes` by taking the entity as a parameter.
   */
  delete(
    entity: FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes<T>
  ): DeleteRequestBuilder<
    FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    taxationCode?: string,
    spedAdjustmentCode?: string
  ): DeleteRequestBuilder<
    FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes<T>,
    T
  > {
    return new DeleteRequestBuilder<
      FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxationCode: taxationCode!,
            SpedAdjustmentCode: spedAdjustmentCode!
          }
    );
  }
}
