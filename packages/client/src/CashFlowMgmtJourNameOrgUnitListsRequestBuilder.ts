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
import { CashFlowMgmtJourNameOrgUnitLists } from './CashFlowMgmtJourNameOrgUnitLists';

/**
 * Request builder class for operations supported on the {@link CashFlowMgmtJourNameOrgUnitLists} entity.
 */
export class CashFlowMgmtJourNameOrgUnitListsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CashFlowMgmtJourNameOrgUnitLists<T>, T> {
  /**
   * Returns a request builder for querying all `CashFlowMgmtJourNameOrgUnitLists` entities.
   * @returns A request builder for creating requests to retrieve all `CashFlowMgmtJourNameOrgUnitLists` entities.
   */
  getAll(): GetAllRequestBuilder<CashFlowMgmtJourNameOrgUnitLists<T>, T> {
    return new GetAllRequestBuilder<CashFlowMgmtJourNameOrgUnitLists<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CashFlowMgmtJourNameOrgUnitLists` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CashFlowMgmtJourNameOrgUnitLists`.
   */
  create(
    entity: CashFlowMgmtJourNameOrgUnitLists<T>
  ): CreateRequestBuilder<CashFlowMgmtJourNameOrgUnitLists<T>, T> {
    return new CreateRequestBuilder<CashFlowMgmtJourNameOrgUnitLists<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CashFlowMgmtJourNameOrgUnitLists` entity based on its keys.
   * @param name Key property. See {@link CashFlowMgmtJourNameOrgUnitLists.name}.
   * @param dataArea Key property. See {@link CashFlowMgmtJourNameOrgUnitLists.dataArea}.
   * @returns A request builder for creating requests to retrieve one `CashFlowMgmtJourNameOrgUnitLists` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>,
    dataArea: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CashFlowMgmtJourNameOrgUnitLists<T>, T> {
    return new GetByKeyRequestBuilder<CashFlowMgmtJourNameOrgUnitLists<T>, T>(
      this.entityApi,
      {
        Name: name,
        DataArea: dataArea
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CashFlowMgmtJourNameOrgUnitLists`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CashFlowMgmtJourNameOrgUnitLists`.
   */
  update(
    entity: CashFlowMgmtJourNameOrgUnitLists<T>
  ): UpdateRequestBuilder<CashFlowMgmtJourNameOrgUnitLists<T>, T> {
    return new UpdateRequestBuilder<CashFlowMgmtJourNameOrgUnitLists<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CashFlowMgmtJourNameOrgUnitLists`.
   * @param name Key property. See {@link CashFlowMgmtJourNameOrgUnitLists.name}.
   * @param dataArea Key property. See {@link CashFlowMgmtJourNameOrgUnitLists.dataArea}.
   * @returns A request builder for creating requests that delete an entity of type `CashFlowMgmtJourNameOrgUnitLists`.
   */
  delete(
    name: string,
    dataArea: string
  ): DeleteRequestBuilder<CashFlowMgmtJourNameOrgUnitLists<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CashFlowMgmtJourNameOrgUnitLists`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CashFlowMgmtJourNameOrgUnitLists` by taking the entity as a parameter.
   */
  delete(
    entity: CashFlowMgmtJourNameOrgUnitLists<T>
  ): DeleteRequestBuilder<CashFlowMgmtJourNameOrgUnitLists<T>, T>;
  delete(
    nameOrEntity: any,
    dataArea?: string
  ): DeleteRequestBuilder<CashFlowMgmtJourNameOrgUnitLists<T>, T> {
    return new DeleteRequestBuilder<CashFlowMgmtJourNameOrgUnitLists<T>, T>(
      this.entityApi,
      nameOrEntity instanceof CashFlowMgmtJourNameOrgUnitLists
        ? nameOrEntity
        : {
            Name: nameOrEntity!,
            DataArea: dataArea!
          }
    );
  }
}
