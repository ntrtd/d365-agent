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
import { CustomerFiscalDocTextReferencedProcesses } from './CustomerFiscalDocTextReferencedProcesses';
import { AgencyBr } from './AgencyBr';

/**
 * Request builder class for operations supported on the {@link CustomerFiscalDocTextReferencedProcesses} entity.
 */
export class CustomerFiscalDocTextReferencedProcessesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerFiscalDocTextReferencedProcesses<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerFiscalDocTextReferencedProcesses` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerFiscalDocTextReferencedProcesses` entities.
   */
  getAll(): GetAllRequestBuilder<
    CustomerFiscalDocTextReferencedProcesses<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CustomerFiscalDocTextReferencedProcesses<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustomerFiscalDocTextReferencedProcesses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerFiscalDocTextReferencedProcesses`.
   */
  create(
    entity: CustomerFiscalDocTextReferencedProcesses<T>
  ): CreateRequestBuilder<CustomerFiscalDocTextReferencedProcesses<T>, T> {
    return new CreateRequestBuilder<
      CustomerFiscalDocTextReferencedProcesses<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CustomerFiscalDocTextReferencedProcesses` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomerFiscalDocTextReferencedProcesses.dataAreaId}.
   * @param customer Key property. See {@link CustomerFiscalDocTextReferencedProcesses.customer}.
   * @param fiscalDocumentText Key property. See {@link CustomerFiscalDocTextReferencedProcesses.fiscalDocumentText}.
   * @param agency Key property. See {@link CustomerFiscalDocTextReferencedProcesses.agency}.
   * @param processNumber Key property. See {@link CustomerFiscalDocTextReferencedProcesses.processNumber}.
   * @returns A request builder for creating requests to retrieve one `CustomerFiscalDocTextReferencedProcesses` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    customer: DeserializedType<T, 'Edm.String'>,
    fiscalDocumentText: DeserializedType<T, 'Edm.String'>,
    agency: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.Agency_BR'>,
    processNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerFiscalDocTextReferencedProcesses<T>, T> {
    return new GetByKeyRequestBuilder<
      CustomerFiscalDocTextReferencedProcesses<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Customer: customer,
      FiscalDocumentText: fiscalDocumentText,
      Agency: agency,
      ProcessNumber: processNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerFiscalDocTextReferencedProcesses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerFiscalDocTextReferencedProcesses`.
   */
  update(
    entity: CustomerFiscalDocTextReferencedProcesses<T>
  ): UpdateRequestBuilder<CustomerFiscalDocTextReferencedProcesses<T>, T> {
    return new UpdateRequestBuilder<
      CustomerFiscalDocTextReferencedProcesses<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerFiscalDocTextReferencedProcesses`.
   * @param dataAreaId Key property. See {@link CustomerFiscalDocTextReferencedProcesses.dataAreaId}.
   * @param customer Key property. See {@link CustomerFiscalDocTextReferencedProcesses.customer}.
   * @param fiscalDocumentText Key property. See {@link CustomerFiscalDocTextReferencedProcesses.fiscalDocumentText}.
   * @param agency Key property. See {@link CustomerFiscalDocTextReferencedProcesses.agency}.
   * @param processNumber Key property. See {@link CustomerFiscalDocTextReferencedProcesses.processNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerFiscalDocTextReferencedProcesses`.
   */
  delete(
    dataAreaId: string,
    customer: string,
    fiscalDocumentText: string,
    agency: AgencyBr,
    processNumber: string
  ): DeleteRequestBuilder<CustomerFiscalDocTextReferencedProcesses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerFiscalDocTextReferencedProcesses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerFiscalDocTextReferencedProcesses` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerFiscalDocTextReferencedProcesses<T>
  ): DeleteRequestBuilder<CustomerFiscalDocTextReferencedProcesses<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    customer?: string,
    fiscalDocumentText?: string,
    agency?: AgencyBr,
    processNumber?: string
  ): DeleteRequestBuilder<CustomerFiscalDocTextReferencedProcesses<T>, T> {
    return new DeleteRequestBuilder<
      CustomerFiscalDocTextReferencedProcesses<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomerFiscalDocTextReferencedProcesses
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Customer: customer!,
            FiscalDocumentText: fiscalDocumentText!,
            Agency: agency!,
            ProcessNumber: processNumber!
          }
    );
  }
}
