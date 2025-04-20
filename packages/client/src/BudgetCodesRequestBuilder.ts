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
import { BudgetCodes } from './BudgetCodes';

/**
 * Request builder class for operations supported on the {@link BudgetCodes} entity.
 */
export class BudgetCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetCodes<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetCodes` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetCodes` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetCodes<T>, T> {
    return new GetAllRequestBuilder<BudgetCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BudgetCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetCodes`.
   */
  create(entity: BudgetCodes<T>): CreateRequestBuilder<BudgetCodes<T>, T> {
    return new CreateRequestBuilder<BudgetCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BudgetCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetCodes.dataAreaId}.
   * @param budgetCode Key property. See {@link BudgetCodes.budgetCode}.
   * @returns A request builder for creating requests to retrieve one `BudgetCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    budgetCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetCodes<T>, T> {
    return new GetByKeyRequestBuilder<BudgetCodes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      BudgetCode: budgetCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetCodes`.
   */
  update(entity: BudgetCodes<T>): UpdateRequestBuilder<BudgetCodes<T>, T> {
    return new UpdateRequestBuilder<BudgetCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetCodes`.
   * @param dataAreaId Key property. See {@link BudgetCodes.dataAreaId}.
   * @param budgetCode Key property. See {@link BudgetCodes.budgetCode}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetCodes`.
   */
  delete(
    dataAreaId: string,
    budgetCode: string
  ): DeleteRequestBuilder<BudgetCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetCodes` by taking the entity as a parameter.
   */
  delete(entity: BudgetCodes<T>): DeleteRequestBuilder<BudgetCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    budgetCode?: string
  ): DeleteRequestBuilder<BudgetCodes<T>, T> {
    return new DeleteRequestBuilder<BudgetCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BudgetCode: budgetCode!
          }
    );
  }
}
