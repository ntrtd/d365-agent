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
import { ContractLineGroups } from './ContractLineGroups';

/**
 * Request builder class for operations supported on the {@link ContractLineGroups} entity.
 */
export class ContractLineGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ContractLineGroups<T>, T> {
  /**
   * Returns a request builder for querying all `ContractLineGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ContractLineGroups` entities.
   */
  getAll(): GetAllRequestBuilder<ContractLineGroups<T>, T> {
    return new GetAllRequestBuilder<ContractLineGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ContractLineGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ContractLineGroups`.
   */
  create(
    entity: ContractLineGroups<T>
  ): CreateRequestBuilder<ContractLineGroups<T>, T> {
    return new CreateRequestBuilder<ContractLineGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ContractLineGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link ContractLineGroups.dataAreaId}.
   * @param contractLineGroupId Key property. See {@link ContractLineGroups.contractLineGroupId}.
   * @returns A request builder for creating requests to retrieve one `ContractLineGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    contractLineGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ContractLineGroups<T>, T> {
    return new GetByKeyRequestBuilder<ContractLineGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ContractLineGroupId: contractLineGroupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ContractLineGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ContractLineGroups`.
   */
  update(
    entity: ContractLineGroups<T>
  ): UpdateRequestBuilder<ContractLineGroups<T>, T> {
    return new UpdateRequestBuilder<ContractLineGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ContractLineGroups`.
   * @param dataAreaId Key property. See {@link ContractLineGroups.dataAreaId}.
   * @param contractLineGroupId Key property. See {@link ContractLineGroups.contractLineGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `ContractLineGroups`.
   */
  delete(
    dataAreaId: string,
    contractLineGroupId: string
  ): DeleteRequestBuilder<ContractLineGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ContractLineGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ContractLineGroups` by taking the entity as a parameter.
   */
  delete(
    entity: ContractLineGroups<T>
  ): DeleteRequestBuilder<ContractLineGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    contractLineGroupId?: string
  ): DeleteRequestBuilder<ContractLineGroups<T>, T> {
    return new DeleteRequestBuilder<ContractLineGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ContractLineGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ContractLineGroupId: contractLineGroupId!
          }
    );
  }
}
