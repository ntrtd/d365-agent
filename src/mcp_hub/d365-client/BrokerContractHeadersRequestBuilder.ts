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
import { BrokerContractHeaders } from './BrokerContractHeaders';

/**
 * Request builder class for operations supported on the {@link BrokerContractHeaders} entity.
 */
export class BrokerContractHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BrokerContractHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `BrokerContractHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `BrokerContractHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<BrokerContractHeaders<T>, T> {
    return new GetAllRequestBuilder<BrokerContractHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BrokerContractHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BrokerContractHeaders`.
   */
  create(
    entity: BrokerContractHeaders<T>
  ): CreateRequestBuilder<BrokerContractHeaders<T>, T> {
    return new CreateRequestBuilder<BrokerContractHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BrokerContractHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link BrokerContractHeaders.dataAreaId}.
   * @param contractId Key property. See {@link BrokerContractHeaders.contractId}.
   * @returns A request builder for creating requests to retrieve one `BrokerContractHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    contractId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BrokerContractHeaders<T>, T> {
    return new GetByKeyRequestBuilder<BrokerContractHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ContractId: contractId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BrokerContractHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BrokerContractHeaders`.
   */
  update(
    entity: BrokerContractHeaders<T>
  ): UpdateRequestBuilder<BrokerContractHeaders<T>, T> {
    return new UpdateRequestBuilder<BrokerContractHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BrokerContractHeaders`.
   * @param dataAreaId Key property. See {@link BrokerContractHeaders.dataAreaId}.
   * @param contractId Key property. See {@link BrokerContractHeaders.contractId}.
   * @returns A request builder for creating requests that delete an entity of type `BrokerContractHeaders`.
   */
  delete(
    dataAreaId: string,
    contractId: string
  ): DeleteRequestBuilder<BrokerContractHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BrokerContractHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BrokerContractHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: BrokerContractHeaders<T>
  ): DeleteRequestBuilder<BrokerContractHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    contractId?: string
  ): DeleteRequestBuilder<BrokerContractHeaders<T>, T> {
    return new DeleteRequestBuilder<BrokerContractHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BrokerContractHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ContractId: contractId!
          }
    );
  }
}
