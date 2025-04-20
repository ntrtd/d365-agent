/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { BrokerContractLines } from './BrokerContractLines';

/**
 * Request builder class for operations supported on the {@link BrokerContractLines} entity.
 */
export class BrokerContractLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BrokerContractLines<T>, T> {
  /**
   * Returns a request builder for querying all `BrokerContractLines` entities.
   * @returns A request builder for creating requests to retrieve all `BrokerContractLines` entities.
   */
  getAll(): GetAllRequestBuilder<BrokerContractLines<T>, T> {
    return new GetAllRequestBuilder<BrokerContractLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BrokerContractLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BrokerContractLines`.
   */
  create(
    entity: BrokerContractLines<T>
  ): CreateRequestBuilder<BrokerContractLines<T>, T> {
    return new CreateRequestBuilder<BrokerContractLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BrokerContractLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link BrokerContractLines.dataAreaId}.
   * @param brokerContractId Key property. See {@link BrokerContractLines.brokerContractId}.
   * @param lineNumber Key property. See {@link BrokerContractLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `BrokerContractLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    brokerContractId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<BrokerContractLines<T>, T> {
    return new GetByKeyRequestBuilder<BrokerContractLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        BrokerContractId: brokerContractId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BrokerContractLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BrokerContractLines`.
   */
  update(
    entity: BrokerContractLines<T>
  ): UpdateRequestBuilder<BrokerContractLines<T>, T> {
    return new UpdateRequestBuilder<BrokerContractLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BrokerContractLines`.
   * @param dataAreaId Key property. See {@link BrokerContractLines.dataAreaId}.
   * @param brokerContractId Key property. See {@link BrokerContractLines.brokerContractId}.
   * @param lineNumber Key property. See {@link BrokerContractLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `BrokerContractLines`.
   */
  delete(
    dataAreaId: string,
    brokerContractId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<BrokerContractLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BrokerContractLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BrokerContractLines` by taking the entity as a parameter.
   */
  delete(
    entity: BrokerContractLines<T>
  ): DeleteRequestBuilder<BrokerContractLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    brokerContractId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<BrokerContractLines<T>, T> {
    return new DeleteRequestBuilder<BrokerContractLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BrokerContractLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BrokerContractId: brokerContractId!,
            LineNumber: lineNumber!
          }
    );
  }
}
