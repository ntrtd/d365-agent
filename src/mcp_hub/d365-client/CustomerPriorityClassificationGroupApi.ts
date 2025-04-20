/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerPriorityClassificationGroup } from './CustomerPriorityClassificationGroup';
import { CustomerPriorityClassificationGroupRequestBuilder } from './CustomerPriorityClassificationGroupRequestBuilder';
import { CustomersV3Api } from './CustomersV3Api';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class CustomerPriorityClassificationGroupApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      CustomerPriorityClassificationGroup<DeSerializersT>,
      DeSerializersT
    >
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): CustomerPriorityClassificationGroupApi<DeSerializersT> {
    return new CustomerPriorityClassificationGroupApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link customerV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_V_3: OneToManyLink<
      CustomerPriorityClassificationGroup<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [CustomersV3Api<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      CUSTOMER_V_3: new OneToManyLink('CustomerV3', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = CustomerPriorityClassificationGroup;

  requestBuilder(): CustomerPriorityClassificationGroupRequestBuilder<DeSerializersT> {
    return new CustomerPriorityClassificationGroupRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CustomerPriorityClassificationGroup<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CustomerPriorityClassificationGroup<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustomerPriorityClassificationGroup<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof CustomerPriorityClassificationGroup,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomerPriorityClassificationGroup,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustomerPriorityClassificationGroup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER_PRIORITY_CLASSIFICATION_GROUP_CODE: OrderableEdmTypeField<
      CustomerPriorityClassificationGroup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CustomerPriorityClassificationGroup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_V_3: OneToManyLink<
      CustomerPriorityClassificationGroup<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CustomerPriorityClassificationGroup<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link customerPriorityClassificationGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_PRIORITY_CLASSIFICATION_GROUP_CODE:
          fieldBuilder.buildEdmTypeField(
            'CustomerPriorityClassificationGroupCode',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomerPriorityClassificationGroup)
      };
    }

    return this._schema;
  }
}
