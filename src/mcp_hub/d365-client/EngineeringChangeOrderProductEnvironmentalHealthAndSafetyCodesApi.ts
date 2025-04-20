/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes } from './EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes';
import { EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodesRequestBuilder } from './EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodesRequestBuilder';
import { EngineeringChangeOrderProductsApi } from './EngineeringChangeOrderProductsApi';
import { EngineeringChangeOrderProductsV2Api } from './EngineeringChangeOrderProductsV2Api';
import { EngineeringChangeOrderProductsV3Api } from './EngineeringChangeOrderProductsV3Api';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes<DeSerializersT>,
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
  ): EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodesApi<DeSerializersT> {
    return new EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodesApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT: OneToOneLink<
      EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_V_2: OneToOneLink<
      EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_V_3: OneToOneLink<
      EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV3Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EngineeringChangeOrderProductsApi<DeSerializersT>,
      EngineeringChangeOrderProductsV2Api<DeSerializersT>,
      EngineeringChangeOrderProductsV3Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_CHANGE_ORDER_PRODUCT: new OneToOneLink(
        'EngineeringChangeOrderProduct',
        this,
        linkedApis[0]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCT_V_2: new OneToOneLink(
        'EngineeringChangeOrderProductV2',
        this,
        linkedApis[1]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCT_V_3: new OneToOneLink(
        'EngineeringChangeOrderProductV3',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor =
    EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes;

  requestBuilder(): EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodesRequestBuilder<DeSerializersT> {
    return new EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes<DeSerializersT>,
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
    typeof EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ENGINEERING_CHANGE_ORDER_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_LINE_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ENVIRONMENTAL_HEALTH_AND_SAFETY_CODE: OrderableEdmTypeField<
      EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT: OneToOneLink<
      EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_V_2: OneToOneLink<
      EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_V_3: OneToOneLink<
      EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV3Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link engineeringChangeOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'EngineeringChangeOrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link engineeringChangeOrderProductLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_LINE_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'EngineeringChangeOrderProductLineNumber',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link environmentalHealthAndSafetyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENVIRONMENTAL_HEALTH_AND_SAFETY_CODE: fieldBuilder.buildEdmTypeField(
          'EnvironmentalHealthAndSafetyCode',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes
        )
      };
    }

    return this._schema;
  }
}
