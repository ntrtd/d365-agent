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
import { CashFlowMgmtJourNames } from './CashFlowMgmtJourNames';

/**
 * Request builder class for operations supported on the {@link CashFlowMgmtJourNames} entity.
 */
export class CashFlowMgmtJourNamesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CashFlowMgmtJourNames<T>, T> {
  /**
   * Returns a request builder for querying all `CashFlowMgmtJourNames` entities.
   * @returns A request builder for creating requests to retrieve all `CashFlowMgmtJourNames` entities.
   */
  getAll(): GetAllRequestBuilder<CashFlowMgmtJourNames<T>, T> {
    return new GetAllRequestBuilder<CashFlowMgmtJourNames<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CashFlowMgmtJourNames` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CashFlowMgmtJourNames`.
   */
  create(
    entity: CashFlowMgmtJourNames<T>
  ): CreateRequestBuilder<CashFlowMgmtJourNames<T>, T> {
    return new CreateRequestBuilder<CashFlowMgmtJourNames<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CashFlowMgmtJourNames` entity based on its keys.
   * @param dataAreaId Key property. See {@link CashFlowMgmtJourNames.dataAreaId}.
   * @param name Key property. See {@link CashFlowMgmtJourNames.name}.
   * @returns A request builder for creating requests to retrieve one `CashFlowMgmtJourNames` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CashFlowMgmtJourNames<T>, T> {
    return new GetByKeyRequestBuilder<CashFlowMgmtJourNames<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Name: name
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CashFlowMgmtJourNames`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CashFlowMgmtJourNames`.
   */
  update(
    entity: CashFlowMgmtJourNames<T>
  ): UpdateRequestBuilder<CashFlowMgmtJourNames<T>, T> {
    return new UpdateRequestBuilder<CashFlowMgmtJourNames<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CashFlowMgmtJourNames`.
   * @param dataAreaId Key property. See {@link CashFlowMgmtJourNames.dataAreaId}.
   * @param name Key property. See {@link CashFlowMgmtJourNames.name}.
   * @returns A request builder for creating requests that delete an entity of type `CashFlowMgmtJourNames`.
   */
  delete(
    dataAreaId: string,
    name: string
  ): DeleteRequestBuilder<CashFlowMgmtJourNames<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CashFlowMgmtJourNames`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CashFlowMgmtJourNames` by taking the entity as a parameter.
   */
  delete(
    entity: CashFlowMgmtJourNames<T>
  ): DeleteRequestBuilder<CashFlowMgmtJourNames<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<CashFlowMgmtJourNames<T>, T> {
    return new DeleteRequestBuilder<CashFlowMgmtJourNames<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CashFlowMgmtJourNames
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!
          }
    );
  }
}
