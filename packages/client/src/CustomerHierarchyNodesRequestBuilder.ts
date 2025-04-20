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
import { CustomerHierarchyNodes } from './CustomerHierarchyNodes';

/**
 * Request builder class for operations supported on the {@link CustomerHierarchyNodes} entity.
 */
export class CustomerHierarchyNodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerHierarchyNodes<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerHierarchyNodes` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerHierarchyNodes` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerHierarchyNodes<T>, T> {
    return new GetAllRequestBuilder<CustomerHierarchyNodes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomerHierarchyNodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerHierarchyNodes`.
   */
  create(
    entity: CustomerHierarchyNodes<T>
  ): CreateRequestBuilder<CustomerHierarchyNodes<T>, T> {
    return new CreateRequestBuilder<CustomerHierarchyNodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerHierarchyNodes` entity based on its keys.
   * @param customerHierarchyId Key property. See {@link CustomerHierarchyNodes.customerHierarchyId}.
   * @param nodePartyNumber Key property. See {@link CustomerHierarchyNodes.nodePartyNumber}.
   * @returns A request builder for creating requests to retrieve one `CustomerHierarchyNodes` entity based on its keys.
   */
  getByKey(
    customerHierarchyId: DeserializedType<T, 'Edm.String'>,
    nodePartyNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerHierarchyNodes<T>, T> {
    return new GetByKeyRequestBuilder<CustomerHierarchyNodes<T>, T>(
      this.entityApi,
      {
        CustomerHierarchyId: customerHierarchyId,
        NodePartyNumber: nodePartyNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerHierarchyNodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerHierarchyNodes`.
   */
  update(
    entity: CustomerHierarchyNodes<T>
  ): UpdateRequestBuilder<CustomerHierarchyNodes<T>, T> {
    return new UpdateRequestBuilder<CustomerHierarchyNodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerHierarchyNodes`.
   * @param customerHierarchyId Key property. See {@link CustomerHierarchyNodes.customerHierarchyId}.
   * @param nodePartyNumber Key property. See {@link CustomerHierarchyNodes.nodePartyNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerHierarchyNodes`.
   */
  delete(
    customerHierarchyId: string,
    nodePartyNumber: string
  ): DeleteRequestBuilder<CustomerHierarchyNodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerHierarchyNodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerHierarchyNodes` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerHierarchyNodes<T>
  ): DeleteRequestBuilder<CustomerHierarchyNodes<T>, T>;
  delete(
    customerHierarchyIdOrEntity: any,
    nodePartyNumber?: string
  ): DeleteRequestBuilder<CustomerHierarchyNodes<T>, T> {
    return new DeleteRequestBuilder<CustomerHierarchyNodes<T>, T>(
      this.entityApi,
      customerHierarchyIdOrEntity instanceof CustomerHierarchyNodes
        ? customerHierarchyIdOrEntity
        : {
            CustomerHierarchyId: customerHierarchyIdOrEntity!,
            NodePartyNumber: nodePartyNumber!
          }
    );
  }
}
