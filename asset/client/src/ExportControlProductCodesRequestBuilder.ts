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
import { ExportControlProductCodes } from './ExportControlProductCodes';

/**
 * Request builder class for operations supported on the {@link ExportControlProductCodes} entity.
 */
export class ExportControlProductCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExportControlProductCodes<T>, T> {
  /**
   * Returns a request builder for querying all `ExportControlProductCodes` entities.
   * @returns A request builder for creating requests to retrieve all `ExportControlProductCodes` entities.
   */
  getAll(): GetAllRequestBuilder<ExportControlProductCodes<T>, T> {
    return new GetAllRequestBuilder<ExportControlProductCodes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExportControlProductCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExportControlProductCodes`.
   */
  create(
    entity: ExportControlProductCodes<T>
  ): CreateRequestBuilder<ExportControlProductCodes<T>, T> {
    return new CreateRequestBuilder<ExportControlProductCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExportControlProductCodes` entity based on its keys.
   * @param displayProductNumber Key property. See {@link ExportControlProductCodes.displayProductNumber}.
   * @param jurisdiction Key property. See {@link ExportControlProductCodes.jurisdiction}.
   * @returns A request builder for creating requests to retrieve one `ExportControlProductCodes` entity based on its keys.
   */
  getByKey(
    displayProductNumber: DeserializedType<T, 'Edm.String'>,
    jurisdiction: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExportControlProductCodes<T>, T> {
    return new GetByKeyRequestBuilder<ExportControlProductCodes<T>, T>(
      this.entityApi,
      {
        DisplayProductNumber: displayProductNumber,
        Jurisdiction: jurisdiction
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExportControlProductCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExportControlProductCodes`.
   */
  update(
    entity: ExportControlProductCodes<T>
  ): UpdateRequestBuilder<ExportControlProductCodes<T>, T> {
    return new UpdateRequestBuilder<ExportControlProductCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExportControlProductCodes`.
   * @param displayProductNumber Key property. See {@link ExportControlProductCodes.displayProductNumber}.
   * @param jurisdiction Key property. See {@link ExportControlProductCodes.jurisdiction}.
   * @returns A request builder for creating requests that delete an entity of type `ExportControlProductCodes`.
   */
  delete(
    displayProductNumber: string,
    jurisdiction: string
  ): DeleteRequestBuilder<ExportControlProductCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExportControlProductCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExportControlProductCodes` by taking the entity as a parameter.
   */
  delete(
    entity: ExportControlProductCodes<T>
  ): DeleteRequestBuilder<ExportControlProductCodes<T>, T>;
  delete(
    displayProductNumberOrEntity: any,
    jurisdiction?: string
  ): DeleteRequestBuilder<ExportControlProductCodes<T>, T> {
    return new DeleteRequestBuilder<ExportControlProductCodes<T>, T>(
      this.entityApi,
      displayProductNumberOrEntity instanceof ExportControlProductCodes
        ? displayProductNumberOrEntity
        : {
            DisplayProductNumber: displayProductNumberOrEntity!,
            Jurisdiction: jurisdiction!
          }
    );
  }
}
