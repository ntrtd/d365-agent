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
import { MyPayStatementDetails } from './MyPayStatementDetails';

/**
 * Request builder class for operations supported on the {@link MyPayStatementDetails} entity.
 */
export class MyPayStatementDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MyPayStatementDetails<T>, T> {
  /**
   * Returns a request builder for querying all `MyPayStatementDetails` entities.
   * @returns A request builder for creating requests to retrieve all `MyPayStatementDetails` entities.
   */
  getAll(): GetAllRequestBuilder<MyPayStatementDetails<T>, T> {
    return new GetAllRequestBuilder<MyPayStatementDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MyPayStatementDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MyPayStatementDetails`.
   */
  create(
    entity: MyPayStatementDetails<T>
  ): CreateRequestBuilder<MyPayStatementDetails<T>, T> {
    return new CreateRequestBuilder<MyPayStatementDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MyPayStatementDetails` entity based on its keys.
   * @param dataAreaId Key property. See {@link MyPayStatementDetails.dataAreaId}.
   * @param payStatementNumber Key property. See {@link MyPayStatementDetails.payStatementNumber}.
   * @param lineNum Key property. See {@link MyPayStatementDetails.lineNum}.
   * @returns A request builder for creating requests to retrieve one `MyPayStatementDetails` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    payStatementNumber: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<MyPayStatementDetails<T>, T> {
    return new GetByKeyRequestBuilder<MyPayStatementDetails<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PayStatementNumber: payStatementNumber,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MyPayStatementDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MyPayStatementDetails`.
   */
  update(
    entity: MyPayStatementDetails<T>
  ): UpdateRequestBuilder<MyPayStatementDetails<T>, T> {
    return new UpdateRequestBuilder<MyPayStatementDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MyPayStatementDetails`.
   * @param dataAreaId Key property. See {@link MyPayStatementDetails.dataAreaId}.
   * @param payStatementNumber Key property. See {@link MyPayStatementDetails.payStatementNumber}.
   * @param lineNum Key property. See {@link MyPayStatementDetails.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `MyPayStatementDetails`.
   */
  delete(
    dataAreaId: string,
    payStatementNumber: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<MyPayStatementDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MyPayStatementDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MyPayStatementDetails` by taking the entity as a parameter.
   */
  delete(
    entity: MyPayStatementDetails<T>
  ): DeleteRequestBuilder<MyPayStatementDetails<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    payStatementNumber?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<MyPayStatementDetails<T>, T> {
    return new DeleteRequestBuilder<MyPayStatementDetails<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MyPayStatementDetails
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PayStatementNumber: payStatementNumber!,
            LineNum: lineNum!
          }
    );
  }
}
