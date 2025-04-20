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
import { FbFiscalDocumentAdjustmentCodesIcms } from './FbFiscalDocumentAdjustmentCodesIcms';

/**
 * Request builder class for operations supported on the {@link FbFiscalDocumentAdjustmentCodesIcms} entity.
 */
export class FbFiscalDocumentAdjustmentCodesIcmsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FbFiscalDocumentAdjustmentCodesIcms<T>, T> {
  /**
   * Returns a request builder for querying all `FbFiscalDocumentAdjustmentCodesIcms` entities.
   * @returns A request builder for creating requests to retrieve all `FbFiscalDocumentAdjustmentCodesIcms` entities.
   */
  getAll(): GetAllRequestBuilder<FbFiscalDocumentAdjustmentCodesIcms<T>, T> {
    return new GetAllRequestBuilder<FbFiscalDocumentAdjustmentCodesIcms<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FbFiscalDocumentAdjustmentCodesIcms` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FbFiscalDocumentAdjustmentCodesIcms`.
   */
  create(
    entity: FbFiscalDocumentAdjustmentCodesIcms<T>
  ): CreateRequestBuilder<FbFiscalDocumentAdjustmentCodesIcms<T>, T> {
    return new CreateRequestBuilder<FbFiscalDocumentAdjustmentCodesIcms<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FbFiscalDocumentAdjustmentCodesIcms` entity based on its keys.
   * @param adjustmentCode Key property. See {@link FbFiscalDocumentAdjustmentCodesIcms.adjustmentCode}.
   * @returns A request builder for creating requests to retrieve one `FbFiscalDocumentAdjustmentCodesIcms` entity based on its keys.
   */
  getByKey(
    adjustmentCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FbFiscalDocumentAdjustmentCodesIcms<T>, T> {
    return new GetByKeyRequestBuilder<
      FbFiscalDocumentAdjustmentCodesIcms<T>,
      T
    >(this.entityApi, { AdjustmentCode: adjustmentCode });
  }

  /**
   * Returns a request builder for updating an entity of type `FbFiscalDocumentAdjustmentCodesIcms`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FbFiscalDocumentAdjustmentCodesIcms`.
   */
  update(
    entity: FbFiscalDocumentAdjustmentCodesIcms<T>
  ): UpdateRequestBuilder<FbFiscalDocumentAdjustmentCodesIcms<T>, T> {
    return new UpdateRequestBuilder<FbFiscalDocumentAdjustmentCodesIcms<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FbFiscalDocumentAdjustmentCodesIcms`.
   * @param adjustmentCode Key property. See {@link FbFiscalDocumentAdjustmentCodesIcms.adjustmentCode}.
   * @returns A request builder for creating requests that delete an entity of type `FbFiscalDocumentAdjustmentCodesIcms`.
   */
  delete(
    adjustmentCode: string
  ): DeleteRequestBuilder<FbFiscalDocumentAdjustmentCodesIcms<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FbFiscalDocumentAdjustmentCodesIcms`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FbFiscalDocumentAdjustmentCodesIcms` by taking the entity as a parameter.
   */
  delete(
    entity: FbFiscalDocumentAdjustmentCodesIcms<T>
  ): DeleteRequestBuilder<FbFiscalDocumentAdjustmentCodesIcms<T>, T>;
  delete(
    adjustmentCodeOrEntity: any
  ): DeleteRequestBuilder<FbFiscalDocumentAdjustmentCodesIcms<T>, T> {
    return new DeleteRequestBuilder<FbFiscalDocumentAdjustmentCodesIcms<T>, T>(
      this.entityApi,
      adjustmentCodeOrEntity instanceof FbFiscalDocumentAdjustmentCodesIcms
        ? adjustmentCodeOrEntity
        : { AdjustmentCode: adjustmentCodeOrEntity! }
    );
  }
}
