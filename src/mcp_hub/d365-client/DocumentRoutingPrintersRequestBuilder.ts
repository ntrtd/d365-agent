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
import { DocumentRoutingPrinters } from './DocumentRoutingPrinters';

/**
 * Request builder class for operations supported on the {@link DocumentRoutingPrinters} entity.
 */
export class DocumentRoutingPrintersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DocumentRoutingPrinters<T>, T> {
  /**
   * Returns a request builder for querying all `DocumentRoutingPrinters` entities.
   * @returns A request builder for creating requests to retrieve all `DocumentRoutingPrinters` entities.
   */
  getAll(): GetAllRequestBuilder<DocumentRoutingPrinters<T>, T> {
    return new GetAllRequestBuilder<DocumentRoutingPrinters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DocumentRoutingPrinters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DocumentRoutingPrinters`.
   */
  create(
    entity: DocumentRoutingPrinters<T>
  ): CreateRequestBuilder<DocumentRoutingPrinters<T>, T> {
    return new CreateRequestBuilder<DocumentRoutingPrinters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DocumentRoutingPrinters` entity based on its keys.
   * @param clientApplicationId Key property. See {@link DocumentRoutingPrinters.clientApplicationId}.
   * @param printerPath Key property. See {@link DocumentRoutingPrinters.printerPath}.
   * @returns A request builder for creating requests to retrieve one `DocumentRoutingPrinters` entity based on its keys.
   */
  getByKey(
    clientApplicationId: DeserializedType<T, 'Edm.String'>,
    printerPath: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DocumentRoutingPrinters<T>, T> {
    return new GetByKeyRequestBuilder<DocumentRoutingPrinters<T>, T>(
      this.entityApi,
      {
        ClientApplicationId: clientApplicationId,
        PrinterPath: printerPath
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DocumentRoutingPrinters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DocumentRoutingPrinters`.
   */
  update(
    entity: DocumentRoutingPrinters<T>
  ): UpdateRequestBuilder<DocumentRoutingPrinters<T>, T> {
    return new UpdateRequestBuilder<DocumentRoutingPrinters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DocumentRoutingPrinters`.
   * @param clientApplicationId Key property. See {@link DocumentRoutingPrinters.clientApplicationId}.
   * @param printerPath Key property. See {@link DocumentRoutingPrinters.printerPath}.
   * @returns A request builder for creating requests that delete an entity of type `DocumentRoutingPrinters`.
   */
  delete(
    clientApplicationId: string,
    printerPath: string
  ): DeleteRequestBuilder<DocumentRoutingPrinters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DocumentRoutingPrinters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DocumentRoutingPrinters` by taking the entity as a parameter.
   */
  delete(
    entity: DocumentRoutingPrinters<T>
  ): DeleteRequestBuilder<DocumentRoutingPrinters<T>, T>;
  delete(
    clientApplicationIdOrEntity: any,
    printerPath?: string
  ): DeleteRequestBuilder<DocumentRoutingPrinters<T>, T> {
    return new DeleteRequestBuilder<DocumentRoutingPrinters<T>, T>(
      this.entityApi,
      clientApplicationIdOrEntity instanceof DocumentRoutingPrinters
        ? clientApplicationIdOrEntity
        : {
            ClientApplicationId: clientApplicationIdOrEntity!,
            PrinterPath: printerPath!
          }
    );
  }
}
