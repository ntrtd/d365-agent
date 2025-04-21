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
import { RetailButtonGridButtons } from './RetailButtonGridButtons';

/**
 * Request builder class for operations supported on the {@link RetailButtonGridButtons} entity.
 */
export class RetailButtonGridButtonsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailButtonGridButtons<T>, T> {
  /**
   * Returns a request builder for querying all `RetailButtonGridButtons` entities.
   * @returns A request builder for creating requests to retrieve all `RetailButtonGridButtons` entities.
   */
  getAll(): GetAllRequestBuilder<RetailButtonGridButtons<T>, T> {
    return new GetAllRequestBuilder<RetailButtonGridButtons<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailButtonGridButtons` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailButtonGridButtons`.
   */
  create(
    entity: RetailButtonGridButtons<T>
  ): CreateRequestBuilder<RetailButtonGridButtons<T>, T> {
    return new CreateRequestBuilder<RetailButtonGridButtons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailButtonGridButtons` entity based on its keys.
   * @param id Key property. See {@link RetailButtonGridButtons.id}.
   * @param buttonGridId Key property. See {@link RetailButtonGridButtons.buttonGridId}.
   * @returns A request builder for creating requests to retrieve one `RetailButtonGridButtons` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Int32'>,
    buttonGridId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailButtonGridButtons<T>, T> {
    return new GetByKeyRequestBuilder<RetailButtonGridButtons<T>, T>(
      this.entityApi,
      {
        ID: id,
        buttonGridId: buttonGridId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailButtonGridButtons`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailButtonGridButtons`.
   */
  update(
    entity: RetailButtonGridButtons<T>
  ): UpdateRequestBuilder<RetailButtonGridButtons<T>, T> {
    return new UpdateRequestBuilder<RetailButtonGridButtons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailButtonGridButtons`.
   * @param id Key property. See {@link RetailButtonGridButtons.id}.
   * @param buttonGridId Key property. See {@link RetailButtonGridButtons.buttonGridId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailButtonGridButtons`.
   */
  delete(
    id: number,
    buttonGridId: string
  ): DeleteRequestBuilder<RetailButtonGridButtons<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailButtonGridButtons`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailButtonGridButtons` by taking the entity as a parameter.
   */
  delete(
    entity: RetailButtonGridButtons<T>
  ): DeleteRequestBuilder<RetailButtonGridButtons<T>, T>;
  delete(
    idOrEntity: any,
    buttonGridId?: string
  ): DeleteRequestBuilder<RetailButtonGridButtons<T>, T> {
    return new DeleteRequestBuilder<RetailButtonGridButtons<T>, T>(
      this.entityApi,
      idOrEntity instanceof RetailButtonGridButtons
        ? idOrEntity
        : {
            ID: idOrEntity!,
            buttonGridId: buttonGridId!
          }
    );
  }
}
