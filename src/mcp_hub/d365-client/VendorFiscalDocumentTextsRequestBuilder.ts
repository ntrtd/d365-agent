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
import { VendorFiscalDocumentTexts } from './VendorFiscalDocumentTexts';

/**
 * Request builder class for operations supported on the {@link VendorFiscalDocumentTexts} entity.
 */
export class VendorFiscalDocumentTextsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorFiscalDocumentTexts<T>, T> {
  /**
   * Returns a request builder for querying all `VendorFiscalDocumentTexts` entities.
   * @returns A request builder for creating requests to retrieve all `VendorFiscalDocumentTexts` entities.
   */
  getAll(): GetAllRequestBuilder<VendorFiscalDocumentTexts<T>, T> {
    return new GetAllRequestBuilder<VendorFiscalDocumentTexts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendorFiscalDocumentTexts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorFiscalDocumentTexts`.
   */
  create(
    entity: VendorFiscalDocumentTexts<T>
  ): CreateRequestBuilder<VendorFiscalDocumentTexts<T>, T> {
    return new CreateRequestBuilder<VendorFiscalDocumentTexts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorFiscalDocumentTexts` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorFiscalDocumentTexts.dataAreaId}.
   * @param vendor Key property. See {@link VendorFiscalDocumentTexts.vendor}.
   * @param fiscalDocumentText Key property. See {@link VendorFiscalDocumentTexts.fiscalDocumentText}.
   * @returns A request builder for creating requests to retrieve one `VendorFiscalDocumentTexts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    vendor: DeserializedType<T, 'Edm.String'>,
    fiscalDocumentText: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorFiscalDocumentTexts<T>, T> {
    return new GetByKeyRequestBuilder<VendorFiscalDocumentTexts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Vendor: vendor,
        FiscalDocumentText: fiscalDocumentText
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendorFiscalDocumentTexts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorFiscalDocumentTexts`.
   */
  update(
    entity: VendorFiscalDocumentTexts<T>
  ): UpdateRequestBuilder<VendorFiscalDocumentTexts<T>, T> {
    return new UpdateRequestBuilder<VendorFiscalDocumentTexts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorFiscalDocumentTexts`.
   * @param dataAreaId Key property. See {@link VendorFiscalDocumentTexts.dataAreaId}.
   * @param vendor Key property. See {@link VendorFiscalDocumentTexts.vendor}.
   * @param fiscalDocumentText Key property. See {@link VendorFiscalDocumentTexts.fiscalDocumentText}.
   * @returns A request builder for creating requests that delete an entity of type `VendorFiscalDocumentTexts`.
   */
  delete(
    dataAreaId: string,
    vendor: string,
    fiscalDocumentText: string
  ): DeleteRequestBuilder<VendorFiscalDocumentTexts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorFiscalDocumentTexts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorFiscalDocumentTexts` by taking the entity as a parameter.
   */
  delete(
    entity: VendorFiscalDocumentTexts<T>
  ): DeleteRequestBuilder<VendorFiscalDocumentTexts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    vendor?: string,
    fiscalDocumentText?: string
  ): DeleteRequestBuilder<VendorFiscalDocumentTexts<T>, T> {
    return new DeleteRequestBuilder<VendorFiscalDocumentTexts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorFiscalDocumentTexts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Vendor: vendor!,
            FiscalDocumentText: fiscalDocumentText!
          }
    );
  }
}
