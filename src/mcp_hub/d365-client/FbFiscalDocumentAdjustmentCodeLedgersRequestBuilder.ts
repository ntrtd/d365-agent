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
import { FbFiscalDocumentAdjustmentCodeLedgers } from './FbFiscalDocumentAdjustmentCodeLedgers';

/**
 * Request builder class for operations supported on the {@link FbFiscalDocumentAdjustmentCodeLedgers} entity.
 */
export class FbFiscalDocumentAdjustmentCodeLedgersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FbFiscalDocumentAdjustmentCodeLedgers<T>, T> {
  /**
   * Returns a request builder for querying all `FbFiscalDocumentAdjustmentCodeLedgers` entities.
   * @returns A request builder for creating requests to retrieve all `FbFiscalDocumentAdjustmentCodeLedgers` entities.
   */
  getAll(): GetAllRequestBuilder<FbFiscalDocumentAdjustmentCodeLedgers<T>, T> {
    return new GetAllRequestBuilder<
      FbFiscalDocumentAdjustmentCodeLedgers<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FbFiscalDocumentAdjustmentCodeLedgers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FbFiscalDocumentAdjustmentCodeLedgers`.
   */
  create(
    entity: FbFiscalDocumentAdjustmentCodeLedgers<T>
  ): CreateRequestBuilder<FbFiscalDocumentAdjustmentCodeLedgers<T>, T> {
    return new CreateRequestBuilder<
      FbFiscalDocumentAdjustmentCodeLedgers<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `FbFiscalDocumentAdjustmentCodeLedgers` entity based on its keys.
   * @param fbFiscalDocumentAdjustmentCodeIdentification Key property. See {@link FbFiscalDocumentAdjustmentCodeLedgers.fbFiscalDocumentAdjustmentCodeIdentification}.
   * @param company Key property. See {@link FbFiscalDocumentAdjustmentCodeLedgers.company}.
   * @returns A request builder for creating requests to retrieve one `FbFiscalDocumentAdjustmentCodeLedgers` entity based on its keys.
   */
  getByKey(
    fbFiscalDocumentAdjustmentCodeIdentification: DeserializedType<
      T,
      'Edm.String'
    >,
    company: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FbFiscalDocumentAdjustmentCodeLedgers<T>, T> {
    return new GetByKeyRequestBuilder<
      FbFiscalDocumentAdjustmentCodeLedgers<T>,
      T
    >(this.entityApi, {
      FBFiscalDocumentAdjustmentCodeIdentification:
        fbFiscalDocumentAdjustmentCodeIdentification,
      Company: company
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FbFiscalDocumentAdjustmentCodeLedgers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FbFiscalDocumentAdjustmentCodeLedgers`.
   */
  update(
    entity: FbFiscalDocumentAdjustmentCodeLedgers<T>
  ): UpdateRequestBuilder<FbFiscalDocumentAdjustmentCodeLedgers<T>, T> {
    return new UpdateRequestBuilder<
      FbFiscalDocumentAdjustmentCodeLedgers<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FbFiscalDocumentAdjustmentCodeLedgers`.
   * @param fbFiscalDocumentAdjustmentCodeIdentification Key property. See {@link FbFiscalDocumentAdjustmentCodeLedgers.fbFiscalDocumentAdjustmentCodeIdentification}.
   * @param company Key property. See {@link FbFiscalDocumentAdjustmentCodeLedgers.company}.
   * @returns A request builder for creating requests that delete an entity of type `FbFiscalDocumentAdjustmentCodeLedgers`.
   */
  delete(
    fbFiscalDocumentAdjustmentCodeIdentification: string,
    company: string
  ): DeleteRequestBuilder<FbFiscalDocumentAdjustmentCodeLedgers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FbFiscalDocumentAdjustmentCodeLedgers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FbFiscalDocumentAdjustmentCodeLedgers` by taking the entity as a parameter.
   */
  delete(
    entity: FbFiscalDocumentAdjustmentCodeLedgers<T>
  ): DeleteRequestBuilder<FbFiscalDocumentAdjustmentCodeLedgers<T>, T>;
  delete(
    fbFiscalDocumentAdjustmentCodeIdentificationOrEntity: any,
    company?: string
  ): DeleteRequestBuilder<FbFiscalDocumentAdjustmentCodeLedgers<T>, T> {
    return new DeleteRequestBuilder<
      FbFiscalDocumentAdjustmentCodeLedgers<T>,
      T
    >(
      this.entityApi,
      fbFiscalDocumentAdjustmentCodeIdentificationOrEntity instanceof
      FbFiscalDocumentAdjustmentCodeLedgers
        ? fbFiscalDocumentAdjustmentCodeIdentificationOrEntity
        : {
            FBFiscalDocumentAdjustmentCodeIdentification:
              fbFiscalDocumentAdjustmentCodeIdentificationOrEntity!,
            Company: company!
          }
    );
  }
}
